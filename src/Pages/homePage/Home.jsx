import Banner from "./Banner";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import Review from "./Review";


const Home = () => {
  return (
    <div className="py-5">
      <Banner></Banner>
      <RecentBlogs/>
      <Review></Review>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;