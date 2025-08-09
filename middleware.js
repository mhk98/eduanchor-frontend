import { NextResponse } from "next/server";

export async function middleware(req) {
  // Send PageView event server-side
  fetch(`https://graph.facebook.com/v17.0/${FB_PIXEL_ID}/events`, {
    method: "POST",
    body: JSON.stringify({
      data: [
        {
          event_name: "PageView",
          event_time: Math.floor(Date.now() / 1000),
          user_data: {},
        },
      ],
      access_token: FB_CONVERSION_API_TOKEN,
    }),
    headers: { "Content-Type": "application/json" },
  }).catch(() => {});

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
