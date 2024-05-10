import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";


const Home = () => {
  return (
    <div className="py-5">
      <Banner></Banner>
      <RecentBlogs/>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;