import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const sampleRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  useCase: z.string().min(1, "Use case is required"),
  intendedUse: z.string().optional(),
  datasetType: z.string().optional(),
  preferredFormat: z.string().optional(),
  languagesNeeded: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = sampleRequestSchema.safeParse(body);

    if (!parsed.success) {
      const flatten = parsed.error.flatten();
      const msg = Object.values(flatten.fieldErrors).flat().join(", ") || "Validation failed";
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    const {
      name,
      email,
      company,
      useCase,
      intendedUse,
      datasetType,
      preferredFormat,
      languagesNeeded,
      timeline,
      message,
    } = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Qali <onboarding@resend.dev>",
      to: "iqbalezedin1@gmail.com",
      replyTo: email,
      subject: `Pilot dataset request from ${name} (${company})`,
      html: `
        <h2>New pilot dataset request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Use case:</strong> ${useCase}</p>
        ${intendedUse ? `<p><strong>Intended use:</strong> ${intendedUse}</p>` : ""}
        ${datasetType ? `<p><strong>Dataset type:</strong> ${datasetType}</p>` : ""}
        ${preferredFormat ? `<p><strong>Preferred format:</strong> ${preferredFormat}</p>` : ""}
        ${languagesNeeded ? `<p><strong>Languages needed:</strong> ${languagesNeeded}</p>` : ""}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
        ${message ? `<p><strong>Message:</strong></p><p>${String(message).replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: typeof error === "string" ? error : (error as Error).message },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Qali <onboarding@resend.dev>",
      to: email,
      subject: "Pilot dataset request received - Qali",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for requesting a free pilot dataset.</p>
        <p>We usually respond within one business day. If your use case is a fit, we will scope the pilot and deliver it within 10 business days.</p>
        <p>Best regards,<br>Qali Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Sample request API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
