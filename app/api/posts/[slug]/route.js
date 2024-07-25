import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { message: "Slug is required" },
      { status: 400 }
    );
  }

  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (err) {
    console.error("Error fetching post:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
