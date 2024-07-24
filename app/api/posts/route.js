import { getAuthSession } from "@/src/utils/auth";
import prisma from "@/src/utils/connect";
import { NextResponse } from "next/server";

// GET POSTS WITH PAGINATION
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page"), 10) || 1;
  const cat = searchParams.get("cat");

  const POST_PER_PAGE = 4;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};

// CREATE A POST WITH KEYWORDS
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }), { status: 401 }
    );
  }

  try {
    const { title, desc, img, slug, catSlug, keywords } = await req.json();

    const post = await prisma.post.create({
      data: {
        title,
        desc,
        img,
        slug,
        catSlug,
        userEmail: session.user.email,
      },
    });

    // Save keywords
    if (keywords && keywords.length > 0) {
      await prisma.keyword.createMany({
        data: keywords.map((keyword) => ({
          keyword,
          postSlug: post.slug,
        })),
      });
    }

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }), { status: 500 }
    );
  }
};
