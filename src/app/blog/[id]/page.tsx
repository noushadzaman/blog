import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import BookMarkModal from "@/components/BookMarkModal";
import { FC } from "react";
import { blogs } from "@/constants";
import Link from "next/link";

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage: FC<BlogPageProps> = ({ params: { id } }) => {
  const blog = blogs.find((blog) => blog.id === id);

  return (
    <>
      {blog ? (
        <div className="p-10 space-y-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-14">
            <Image
              className="rounded-xl"
              src={blog.imgUrl}
              width={500}
              height={500}
              alt="blog image"
            />

            <div className="space-y-10">
              <h2 className="text-3xl font-semibold">{blog.title}</h2>

              <div className="flex items-center gap-6">
                <Image
                  className="size-[60px] object-cover object-center rounded-full"
                  src={blog.authorImg}
                  width={500}
                  height={500}
                  alt="blog image"
                />
                <div>
                  <p className="font-semibold">{blog.author}</p>
                  <p className="text-gray-400">{blog.date}</p>
                </div>
              </div>
            </div>
          </div>
          <p>{blog.content}</p>
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger className="py-3 bg-gray-300 px-10 uppercase">
                Bookmark
              </DialogTrigger>
              <BookMarkModal blogId={blog.id} />
            </Dialog>
            <Link
              href={`/form/${blog.id}`}
              className="py-3 bg-gray-300 px-10 uppercase"
            >
              Edit Blog
            </Link>
          </div>
        </div>
      ) : (
        <p>blog not found</p>
      )}
    </>
  );
};

export default BlogPage;
