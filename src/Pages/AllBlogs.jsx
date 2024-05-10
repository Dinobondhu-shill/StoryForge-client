import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import BlogsCard from "../components/BlogsCard";
// import BlogsCard from "../../components/BlogsCard";
// import { Link } from "react-router-dom";


const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/blogs')
    .then(res=> res.json())
    .then(data=>setBlogs(data))
  },[])

  return (
    <div>
      <div className="py-5 text-center">
      <Marquee className="text-4xl py-4">Explore All & Gather knowledge</Marquee>
        <Marquee className="text-3xl overflow-hidden">Welcome to storyForge's Blogs heaven! Explore a diverse range of topics including technology, web development, design, data science, artificial intelligence, and more.
      New articles are added regularly, so be sure to check back often for the latest insights and updates.</Marquee>
      </div>
      <hr />
      <div className="md:px-24 grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
      {blogs.map(blog=> <BlogsCard key={blog._id} blog={blog}></BlogsCard>)}
      </div>
    </div>
  );
};

export default AllBlogs;