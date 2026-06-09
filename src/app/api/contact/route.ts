import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  safari: string;
  travelers: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the inquiry in a database
    // 3. Send a confirmation email to the user

    // For now, we'll just log the inquiry and return success
    console.log("Contact form submission:", {
      ...data,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { success: true, message: "Inquiry received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
