import { NextResponse } from 'next/server';
import logger from '@/lib/logger';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: Request) {
  logger.info('Received contact form submission');
  
  try {
    const { name, email, message } = await request.json();
    
    // Better debugging for environment variables
    logger.debug('Environment variables available:', {
      CONTACT_EMAIL: process.env.CONTACT_EMAIL ? 'set' : 'not set',
      NODE_ENV: process.env.NODE_ENV,
    });
    
    // Get recipient email from environment variable
    const recipientEmail = process.env.CONTACT_EMAIL;
    
    if (!recipientEmail) {
      logger.error('CONTACT_EMAIL environment variable is not set');
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }
    
    // Validate input
    if (!name || !email || !message) {
      logger.warn('Invalid form submission - missing required fields');
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      logger.warn('Invalid email format provided', { email });
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send the email
    logger.info('Sending contact form email', { 
      name, 
      from: email, 
      to: recipientEmail,
      messageLength: message.length
    });
    
    const result = await sendContactFormEmail(recipientEmail, { name, email, message });
    
    logger.info('Email sent successfully', { messageId: result.messageId });
    
    // Include preview URL for test emails in development
    const responseData = { 
      success: true, 
      message: 'Thank you for your message. I will get back to you soon!' 
    };
    
    if (process.env.NODE_ENV === 'development' && result.previewUrl) {
      Object.assign(responseData, { 
        previewUrl: result.previewUrl,
        note: 'This preview URL is only available in development mode'
      });
    }

    return NextResponse.json(responseData);
    
  } catch (error) {
    logger.error('Failed to process contact form submission', { error });
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 