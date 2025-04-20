import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AGENT_EMAIL = 'agent@quotelinker.com'; // Replace with your agent's email

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

    // Send confirmation email to user
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

    // Send notification to agent
    await resend.emails.send({
      from: 'leads@quotelinker.com',
      to: AGENT_EMAIL,
      subject: `New ${quoteType} Insurance Lead`,
      html: `
        <h1>New Lead Alert: ${quoteType} Insurance</h1>
        <h2>Lead Details:</h2>
        <ul>
          <li>Name: ${fullName}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>ZIP Code: ${zipCode}</li>
          <li>Insurance Type: ${quoteType}</li>
          <li>Timestamp: ${new Date().toLocaleString()}</li>
        </ul>
        <p>Please follow up with this lead as soon as possible.</p>
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