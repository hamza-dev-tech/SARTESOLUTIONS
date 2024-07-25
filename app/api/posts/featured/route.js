import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

// Get the featured post
export const GET = async (req) => {
  try {
    const post = await prisma.post.findFirst({
      where: { featured: true }
    });

    return NextResponse.json({ post }, { status: 200 });
  } catch (err) {
    console.error("Error fetching featured post:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
