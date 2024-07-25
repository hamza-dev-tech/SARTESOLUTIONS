import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";
import { getAuthSession } from "@/src/utils/auth"; // Ensure this import is correct

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

    return NextResponse.json({ keywords }, { status: 200 });
  } catch (err) {
    console.error("Error fetching keywords:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

// CREATE keywords
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json(
      { message: "Not Authenticated!" },
      { status: 401 }
    );
  }

  try {
    const body = await req.json();
    const keyword = await prisma.keyword.create({
      data: { ...body, userEmail: session.user.email },
    });

    return NextResponse.json(keyword, { status: 200 });
  } catch (err) {
    console.error("Error creating keyword:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
