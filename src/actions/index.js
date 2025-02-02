"use server";

import getDb from "../../sqlite";

export async function addBlog({ data }) {
  const { author, authorImg, title, content, imgUrl } = data;
  const db = await getDb();
  await db.run(
    `INSERT INTO blog (author, authorImg, title, content, imgUrl)
      VALUES (?, ?, ?, ?, ?)`,
    [author, authorImg, title, content, imgUrl]
  );
  return { success: true, message: "Add blog successfully" };
}

export async function deleteBlog({ id }) {
  const db = await getDb();
  await db.run("DELETE FROM blog WHERE id = ?", [id]);

  return { success: true, message: "Add blog successfully" };
}
