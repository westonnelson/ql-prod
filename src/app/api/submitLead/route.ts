import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, zipCode, quoteType } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !zipCode || !quoteType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Add Salesforce integration here
    // This is a placeholder for the Salesforce API call
    const salesforceResponse = await fetch(process.env.SALESFORCE_API_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SALESFORCE_API_KEY}`,
      },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        zipCode,
        quoteType,
        source: 'QuoteLinker',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!salesforceResponse.ok) {
      throw new Error('Failed to submit to Salesforce');
    }

    // Send confirmation email
    await resend.emails.send({
      from: 'quotes@quotelinker.com',
      to: email,
      subject: `Your ${quoteType} Insurance Quote Request`,
      html: `
        <h1>Thank you for your interest in ${quoteType} Insurance!</h1>
        <p>Hi ${fullName},</p>
        <p>We've received your request for a ${quoteType} insurance quote. Our team will review your information and contact you shortly with personalized options.</p>
        <p>Best regards,<br>The QuoteLinker Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
} 