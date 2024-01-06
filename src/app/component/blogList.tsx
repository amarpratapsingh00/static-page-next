import a from "../../../public/assets/a.png";
import b from "../../../public/assets/b.png";
import c from "../../../public/assets/c.jpg";
import blogData from "./blogData";

import Image from "next/image";
export default function BlogList() {
  return (
    <>
    <div className="mt-2">
    <ul>
        {blogData.map((blog) => (
          <li key={blog.id}>
          <div className="flex">
          <Image src={blog.img} alt={blog.title} width={200} height={200} />
            <h1 className="text-2xl">{blog.title}</h1>
            <p>{blog.description}</p>
          </div>
          </li>
        ))}
     </ul>
    </div>
    </>
  );
}
