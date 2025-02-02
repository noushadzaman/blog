import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import BookMarkModal from "@/components/BookMarkModal";

const blog = {
  id: crypto.randomUUID(),
  author: "Ibrahim Khalil",
  authorImg:
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  date: "asdaf-adas-da",
  title: "What is lorem ipsum? what does it come from?",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet error praesentium consequatur maxime cumque, harum ullam! Est aut aliquam voluptates et reiciendis suscipit ea! Incidunt tempora, laborum, labore nostrum dolores enim alias facere magni aut provident pariatur aspernatur ducimus ipsam velit eaque, porro voluptatum voluptas animi. Iusto aperiam itaque, harum voluptate consectetur natus enim culpa. Sapiente qui asperiores expedita quis quo, voluptatem neque consectetur iure iusto aliquid? Velit, unde dignissimos. Est consectetur magnam nihil, natus, id recusandae nostrum accusamus corrupti consequuntur reprehenderit excepturi reiciendis quaerat saepe non rem odio incidunt eius, aspernatur voluptatem eveniet magni consequatur numquam vitae a.",
  imgUrl:
    "https://images.unsplash.com/photo-1738251198850-39ba48c75fde?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const BlogPage = () => {
  return (
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

      <Dialog>
        <DialogTrigger className="py-3 bg-gray-300 px-10 uppercase">
          Bookmark
        </DialogTrigger>
        <BookMarkModal blogId={blog.id} />
      </Dialog>
    </div>
  );
};

export default BlogPage;
