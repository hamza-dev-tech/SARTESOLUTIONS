import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

// Get the featured posts
export const GET = async (req) => {
  try {
    const posts = await prisma.post.findMany({
      where: { picked: true },
      take: 4,
    });

    return NextResponse.json({ posts }, { status: 200 });
  } catch (err) {
    console.error("Error fetching featured posts:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
