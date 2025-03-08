import { NextResponse } from 'next/server';
import { sendContactFormEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    
    // Get recipient email from environment variable
    const recipientEmail = process.env.CONTACT_EMAIL;
    
    if (!recipientEmail) {
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      );
    }
    
    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Send the email
    const result = await sendContactFormEmail(recipientEmail, { name, email, message });
    
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
    
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 