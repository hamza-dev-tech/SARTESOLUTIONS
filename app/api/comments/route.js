import { getAuthSession } from "@/src/utils/auth";
import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

// GET ALL COMMENTS OF A POST
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });

    return NextResponse.json(comments, { status: 200 });
  } catch (err) {
    console.error("Error fetching comments:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};

// CREATE A COMMENT
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
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return NextResponse.json(comment, { status: 200 });
  } catch (err) {
    console.error("Error creating comment:", err);
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
};
