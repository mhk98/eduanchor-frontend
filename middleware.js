import { NextResponse } from "next/server";
import crypto from "crypto";

function sha256Hash(value) {
  return crypto
    .createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

export async function middleware(req) {
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const accessToken = process.env.FB_CONVERSION_API_TOKEN;

  if (!pixelId || !accessToken) {
    return NextResponse.next();
  }

  try {
    // ডেমো ইমেইল ও ফোন নম্বর (প্রয়োজনমত বদলাতে পারো)
    const demoEmail = "demo@example.com";
    const demoPhone = "0123456789";

    // হ্যাশ করা ইমেইল ও ফোন নম্বর
    const hashedEmail = sha256Hash(demoEmail);
    const hashedPhone = sha256Hash(demoPhone);

    // ইউজারের ব্রাউজার ও ডিভাইস তথ্য (User-Agent)
    const userAgent = req.headers.get("user-agent") || null;

    // Accept-Language হেডার (ঐচ্ছিক)
    const language = req.headers.get("accept-language") || null;

    await fetch(`https://graph.facebook.com/v17.0/${pixelId}/events`, {
      method: "POST",
      body: JSON.stringify({
        data: [
          {
            event_name: "PageView",
            event_time: Math.floor(Date.now() / 1000),
            user_data: {
              em: hashedEmail, // হ্যাশ করা ইমেইল
              ph: hashedPhone, // হ্যাশ করা ফোন
              client_user_agent: userAgent,
              client_language: language,
            },
          },
        ],
        access_token: accessToken,
      }),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // error হলে silent fail করবে
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
