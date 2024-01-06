import About from "./component/about";
import BlogList from "./component/blogList";
import Navbar from "./component/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <BlogList />
    </>
  );
}
