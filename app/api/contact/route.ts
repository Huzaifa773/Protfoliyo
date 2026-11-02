import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Console log for server verification in local dev
    console.log('[Portfolio Contact Form Submission]:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    /*
      Tip: To forward directly to your inbox via Resend or Nodemailer or Formspree:
      e.g. using Resend:
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'huzaifamuhammed597@gmail.com',
        subject: `New Portfolio Message: ${subject}`,
        text: `From: ${name} (${email})\n\n${message}`,
      });
    */

    return NextResponse.json(
      { success: true, message: 'Message received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while sending your message.' },
      { status: 500 }
    );
  }
}
