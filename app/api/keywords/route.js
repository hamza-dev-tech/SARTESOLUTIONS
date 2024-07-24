import { getAuthSession } from "@/src/utils/auth";
import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

// GET ALL Keywords OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const keywords = await prisma.keyword.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { post: true },
    });

    return new NextResponse(JSON.stringify({ keywords }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};

// CREATE keywords
export const POST = async (req) => {
  const session = await getAuthSession();


  try {
    const body = await req.json();
    const keyword = await prisma.keyword.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(keyword), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};
