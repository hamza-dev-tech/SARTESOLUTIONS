import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        views: 'desc',
      },
      take: 4,
    });
    return NextResponse.json({ posts }, { status: 200 });
  } catch (err) {
    console.error("Error fetching most viewed posts:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
