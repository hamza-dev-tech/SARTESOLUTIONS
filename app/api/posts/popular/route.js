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
    return new NextResponse(JSON.stringify({ posts }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};
