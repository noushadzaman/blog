import Image from "next/image";
import Link from "next/link";
import getDb from "../../../sqlite";

const BlogsPage = async () => {
  const db = await getDb();
  const blogs = await db.all("Select * from blog");
  // const insertBlog = async (
  //   author: string,
  //   authorImg: string,
  //   title: string,
  //   content: string,
  //   imgUrl: string
  // ) => {
  //   const db = await getDb();

  //   // Insert data into the 'blog' table
  //   await db.run(
  //     `INSERT INTO blog (author, authorImg, title, content, imgUrl)
  //     VALUES (?, ?, ?, ?, ?)`,
  //     [author, authorImg, title, content, imgUrl]
  //   );

  //   console.log('Blog inserted successfully');
  // };

  // await insertBlog(
  //   'Sarjis alam',
  //   'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //   '4 What is lorem ipsum? what does it come from?',
  //   'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti eveniet error praesentium consequatur maxime cumque, harum ullam! Est aut aliquam voluptates et reiciendis suscipit ea! Incidunt tempora, laborum, labore nostrum dolores enim alias facere magni aut provident pariatur aspernatur ducimus ipsam velit eaque, porro voluptatum voluptas animi. Iusto aperiam itaque, harum voluptate consectetur natus enim culpa. Sapiente qui asperiores expedita quis quo, voluptatem neque consectetur iure iusto aliquid? Velit, unde dignissimos. Est consectetur magnam nihil, natus, id recusandae nostrum accusamus corrupti consequuntur reprehenderit excepturi reiciendis quaerat saepe non rem odio incidunt eius, aspernatur voluptatem eveniet magni consequatur numquam vitae a.',
  //   'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  // );
  // await db.run(`DELETE FROM blog`);

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
