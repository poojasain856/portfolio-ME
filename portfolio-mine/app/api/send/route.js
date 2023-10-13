// import { EmailTemplate } from '../../../components/EmailTemplate';
// import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_eRnuNaTE_2y7TZ89UH1vtxA2jB125rAwY');
// const fromEmail = process.env.FROM_EMAIL;

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'poojasain856@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});