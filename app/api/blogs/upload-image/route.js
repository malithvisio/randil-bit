import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { v4 as uuidv4 } from "uuid";

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replace(/\s/g, "-");
    const uniqueFilename = `${uuidv4()}-${filename}`;
    const relativePath = `/uploads/${uniqueFilename}`;
    const absolutePath = path.join(process.cwd(), "public", relativePath);

    await writeFile(absolutePath, buffer);

    return NextResponse.json({
      url: relativePath,
      success: 1,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    );
  }
}
