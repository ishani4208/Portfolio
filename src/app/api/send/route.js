import { NextResponse } from "next/server";
//import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export default async (req, res) => {
  const { body } = req;
  const { email } = body;
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
  return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}