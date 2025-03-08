import { NextResponse } from 'next/server';

export async function GET() {
  // Don't expose sensitive values in production
  const isDev = process.env.NODE_ENV === 'development';
  
  return NextResponse.json({
    environment: process.env.NODE_ENV,
    contactEmailSet: !!process.env.CONTACT_EMAIL,
    // Only show the actual email value in development
    contactEmail: isDev ? process.env.CONTACT_EMAIL : '[hidden in production]',
    envVars: isDev ? Object.keys(process.env).filter(key => !key.includes('SECRET') && !key.includes('KEY')) : [],
  });
} 