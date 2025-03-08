import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
  cc?: string;
}

// For development, use an Ethereal test account
// For production, configure this with your actual SMTP credentials
const createTransporter = async () => {
  // Use environment variables if available
  if (process.env.EMAIL_SMTP_HOST && process.env.EMAIL_SMTP_PORT) {
    // For Gmail specifically
    if (process.env.EMAIL_SMTP_HOST.includes('gmail')) {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_SMTP_USER,
          pass: process.env.EMAIL_SMTP_PASSWORD,
        },
      });
    }
    
    // For other SMTP servers
    return nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_HOST,
      port: parseInt(process.env.EMAIL_SMTP_PORT || '587', 10),
      secure: process.env.EMAIL_SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SMTP_USER,
        pass: process.env.EMAIL_SMTP_PASSWORD,
      },
    });
  }

  // If no SMTP config provided, use Ethereal for testing
  const testAccount = await nodemailer.createTestAccount();
  
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
};

export const sendEmail = async ({ to, subject, text, html }: EmailOptions) => {
  try {
    const transporter = await createTransporter();
    
    const from = process.env.EMAIL_FROM || `"Your Website" <${process.env.CONTACT_EMAIL}>`;
    
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html: html || text,
    });
    
    return {
      success: true,
      messageId: info.messageId,
      previewUrl: nodemailer.getTestMessageUrl(info),
    };
  } catch (error) {
    throw error;
  }
};

export const sendContactFormEmail = async (
  recipientEmail: string,
  { name, email, message }: { name: string; email: string; message: string }
) => {
  const subject = `[Website Contact Form] New message from ${name}`;
  
  const text = `
Name: ${name}
Email: ${email}

Message:
${message}
  `;
  
  const html = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Message</h2>
  <p style="margin-bottom: 20px;">You have received a new message from your website contact form.</p>
  
  <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    
    <div style="margin-top: 20px;">
      <strong>Message:</strong>
      <p style="white-space: pre-line; background-color: white; padding: 15px; border-radius: 5px;">${message}</p>
    </div>
  </div>
  
  <p style="margin-top: 20px; font-size: 14px; color: #777;">
    This email was sent from your website contact form.
  </p>
</div>
  `;

  // Add debugging information to help track email delivery
  const options: EmailOptions = {
    to: recipientEmail,
    subject,
    text,
    html,
  };
  
  // Add CC if in development mode to help with troubleshooting
  if (process.env.NODE_ENV === 'development' && process.env.DEBUG_CC_EMAIL) {
    options.cc = process.env.DEBUG_CC_EMAIL;
  }
  
  return sendEmail(options);
}; 