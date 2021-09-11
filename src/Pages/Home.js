import BlogList from "../Components/BlogList";
import ImageCarousel from "../Components/ImageCarousel";
import { ImageData } from "../Components/ImageData";
import useFetch from "../Components/useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* <ImageCarousel slides={ImageData}/> */}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
