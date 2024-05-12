import Banner from "./Banner";
import Category from "./Category";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import Review from "./Review";


const Home = () => {
  return (
    <div className="py-5">
      <Banner></Banner>
      <RecentBlogs/>
      <Review></Review>
      <Category></Category>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;