import { Resend } from "resend";
import * as React from "react";
import { EmailTemplate } from "@/components/utils/email-template";
import { NextRequest, NextResponse } from "next/server";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY environment variable");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Cette signature est la bonne pour Next.js App Router
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Request body:", body);

    const { data, error } = await resend.emails.send({
      from: "contact@prenomnom.dev",
      to: ["moras.thomas@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

// Optionnel : ajoutez cette ligne pour configurer les en-têtes CORS si nécessaire
export const runtime = "edge";
