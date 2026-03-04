import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  useCase: z.string().optional(),
  datasetType: z.string().optional(),
  languagesNeeded: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const flatten = parsed.error.flatten();
      const msg = Object.values(flatten.fieldErrors).flat().join(", ") || "Validation failed";
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    const {
      name,
      email,
      company,
      message,
      useCase,
      datasetType,
      languagesNeeded,
      timeline,
    } = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Qali <onboarding@resend.dev>",
      to: "contact@qali.et",
      replyTo: email,
      subject: `Contact from ${name} (${company})`,
      html: `
        <h2>New contact submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${useCase ? `<p><strong>Use case:</strong> ${useCase}</p>` : ""}
        ${datasetType ? `<p><strong>Dataset type:</strong> ${datasetType}</p>` : ""}
        ${languagesNeeded ? `<p><strong>Languages needed:</strong> ${languagesNeeded}</p>` : ""}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Qali <onboarding@resend.dev>",
      to: email,
      subject: "We received your message - Qali",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for contacting Qali. We've received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Qali Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
