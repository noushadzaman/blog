"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  id: string;
  author: string;
  authorImg: string;
  date: string;
  title: string;
  content: string;
  imgUrl: string;
};

const AddBlogPage = () => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-3xl mx-auto pt-16 space-y-5">
      <p className="text-2xl font-semibold">ADD BLOG</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="author">Your name</Label>
          <Input
            placeholder="name"
            {...register("author", { required: true })}
          />
        </div>
        <div>
          <Label htmlFor="authorImg">Your profile image URL</Label>
          <Input
            placeholder="unsplash web url"
            {...register("authorImg", { required: true })}
          />
        </div>
        <div>
          <Label htmlFor="title">Blog title</Label>
          <Input
            placeholder="title"
            {...register("title", { required: true })}
          />
        </div>
        <div>
          <Label htmlFor="content">Blog content</Label>
          <Input
            placeholder="content"
            {...register("content", { required: true })}
          />
        </div>
        <div>
          <Label htmlFor="imgUrl">Your Image URl</Label>
          <Input
            placeholder="unsplash web url"
            {...register("imgUrl", { required: true })}
          />
        </div>

        <Button type="submit" className="w-full mt-8">
          ADD BLOG
        </Button>
      </form>
    </div>
  );
};

export default AddBlogPage;
