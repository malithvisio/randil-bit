import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "No URL provided" }, { status: 400 });
    }

    // Fetch the webpage
    const response = await fetch(url);
    const html = await response.text();

    // Basic metadata extraction (you might want to use a library like cheerio for better parsing)
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1] || "";
    const description =
      html.match(
        /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i
      )?.[1] || "";
    const image =
      html.match(
        /<meta[^>]*property="og:image"[^>]*content="([^"]*)"[^>]*>/i
      )?.[1] || "";

    return NextResponse.json({
      success: 1,
      meta: {
        title,
        description,
        image: {
          url: image,
        },
      },
    });
  } catch (error) {
    console.error("Error fetching link metadata:", error);
    return NextResponse.json(
      { error: "Error fetching link metadata" },
      { status: 500 }
    );
  }
}
