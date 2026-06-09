import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  safari: string;
  travelers: string;
  message: string;
}

// Rate limiting: track IPs in memory with timestamps, max 5 per minute
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside the window
  const recent = timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW);

  if (recent.length >= RATE_LIMIT_MAX) {
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strip HTML tags from input
function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, "");
}

// Sanitize input: trim and strip HTML tags
function sanitize(input: string): string {
  return stripHtml(input.trim());
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data: ContactFormData = await request.json();

    // Sanitize inputs
    const name = sanitize(data.name || "");
    const email = sanitize(data.email || "");
    const phone = sanitize(data.phone || "");
    const safari = sanitize(data.safari || "");
    const travelers = sanitize(data.travelers || "");
    const message = sanitize(data.message || "");

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Max length validation
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name must be 100 characters or fewer." },
        { status: 400 }
      );
    }
    if (email.length > 254) {
      return NextResponse.json(
        { error: "Email must be 254 characters or fewer." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message must be 5000 characters or fewer." },
        { status: 400 }
      );
    }
    if (phone && phone.length > 20) {
      return NextResponse.json(
        { error: "Phone number must be 20 characters or fewer." },
        { status: 400 }
      );
    }

    // TODO: Integrate email service (e.g., Resend, SendGrid) to send notifications
    // TODO: Store the inquiry in a database for record-keeping
    // TODO: Send a confirmation email to the user
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      safari,
      travelers,
      message,
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
