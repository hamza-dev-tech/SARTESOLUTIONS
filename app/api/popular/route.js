import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";






export const GET = async (req) => {


  const query = {
    orderBy: {
      views: 'desc',
    },
    take: 4,
  };

  try {
    const [ posts ] = await prisma.$transaction([
      prisma.post.findMany(query),

    ]);
    return new NextResponse(JSON.stringify({ posts }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};