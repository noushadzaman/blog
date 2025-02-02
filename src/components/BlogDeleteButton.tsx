"use client";

import { deleteBlog } from "@/actions";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface BlogDeleteButtonProps {
  id: string;
}

const BlogDeleteButton: FC<BlogDeleteButtonProps> = ({ id }) => {
  const router = useRouter();
  const handleDeleteBlog = async () => {
    await deleteBlog({ id });
    router.push("/blogs");
  };

  return (
    <button
      onClick={async () => handleDeleteBlog()}
      className="py-3 bg-gray-300 px-10 uppercase"
    >
      Delete Blog
    </button>
  );
};

export default BlogDeleteButton;
