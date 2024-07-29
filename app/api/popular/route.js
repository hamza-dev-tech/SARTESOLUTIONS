import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";


// Get Popular Posts
export const GET = async (req) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        views: 'desc',
      },
      take: 4,
    });
    return new NextResponse(
      JSON.stringify({ posts }),
      { status: 200, headers: { 'Cache-Control': 'no-store' } }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};
