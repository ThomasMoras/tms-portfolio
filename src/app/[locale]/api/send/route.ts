import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "@/components/utils/email-template";
import { NextResponse } from "next/server";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  req: Request,
  { params }: { params: { locale: string } }
) {
  const { locale } = await params;

  console.log("API Route Hit in locale:", locale);

  try {
    const body = await req.json();
    console.log("Request body:", body);

    const { data, error } = await resend.emails.send({
      from: "contact@prenomnom.dev",
      to: ["moras.thomas@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    console.log("Resend response:", { data, error });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log("Email sent successfully");
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Caught error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
