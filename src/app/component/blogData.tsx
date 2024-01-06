import Image from "next/image";
import a from "../../../public/assets/a.png";
import b from "../../../public/assets/b.png";
import c from "../../../public/assets/c.jpg";
import Link from "next/link";

  const blogData = [
    {
      id: 1,
      title: "Blog 1",
      img: a,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque qui inventore vel fugit autem aspernatur et optio atque laborum. Quae delect",
    },
    {
      id: 2,
      title: "Blog 2",
      img: b,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque qui inventore vel fugit autem aspernatur et optio atque laborum. Quae delect",
    },
    {
      id: 3,
      title: "Blog 3",
      img: c,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error itaque qui inventore vel fugit autem aspernatur et optio atque laborum. Quae delect",
    },
  ];
  export default blogData;
 


export async function getStaticProps() {
  return {
    props: {
        blogData,
    },
  };
}
