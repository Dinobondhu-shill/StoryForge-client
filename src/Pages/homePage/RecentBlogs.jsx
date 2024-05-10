import { useEffect, useState } from "react";
import BlogsCard from "../../components/BlogsCard";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/blogs')
    .then(res=> res.json())
    .then(data=>setBlogs(data))
  },[])
  return (
    <div className="md:px-10 lg:px-24 py-10 text-center">
      <h2 className="text-5xl">Recent Blogs</h2>
      <p className="py-4">Dive into recent update to explore more about world's news</p>
      <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 items-center  gap-8">
      {blogs.map(blog=> <BlogsCard key={blog._id} blog={blog}></BlogsCard>)}
      </div>
    </div>
  );
};

export default RecentBlogs;