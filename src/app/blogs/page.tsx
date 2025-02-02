import Image from "next/image";
import Link from "next/link";
import getDb from "../../../sqlite";

const BlogsPage = async () => {
  const db = await getDb();
  const blogs = await db.all("Select * from blog");

  return (
    <div className="flex gap-3 flex-wrap justify-center max-lg:px-10 max-w-[1200px] mx-auto pt-16">
      {blogs.map((blog, index) => (
        <div key={index} className="flex flex-col max-w-sm">
          <Image
            className="rounded-lg w-full"
            src={blog.imgUrl}
            alt="blog image"
            width={350}
            height={230}
          />
          <Link
            href={`/blog/${blog.id}`}
            className="pt-4 text-xl hover:underline hover:underline-offset-4 cursor-pointer"
          >
            {blog.title}
          </Link>
          <p className="text-sm pt-3 text-gray-600">
            {blog.content.slice(0, 120)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
