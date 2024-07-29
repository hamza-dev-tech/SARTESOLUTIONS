import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

// Get the featured post
export const GET = async (req) => {
  try {
    const posts = await prisma.post.findFirst({
      where: { featured: true },
    });



    return new NextResponse(JSON.stringify({ posts }), { status: 200 });
  } catch (err) {
    console.log("API Error:", err); // Add console log
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};



