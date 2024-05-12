
import Marquee from "react-fast-marquee";
import BlogsCard from "../components/BlogsCard";
import { FaChevronDown } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";



const AllBlogs = () => {
  const { isPending, data: blogs, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: async ()=> {
      const res = await fetch('http://localhost:5000/blogs')
      return res.json()
    }
  })

if(isPending) return <span className="loading block mx-auto text-6xl text-center loading-spinner text-info "></span>


  return (
    <div>
      <div className="py-5 text-center">
      <Marquee className="text-4xl py-4">Explore All & Gather knowledge</Marquee>
        <Marquee className="text-3xl overflow-hidden">Welcome to storyForge's Blogs heaven! Explore a diverse range of topics including technology, web development, design, data science, artificial intelligence, and more.
      New articles are added regularly, so be sure to check back often for the latest insights and updates.</Marquee>
      </div><hr />
      {/* dropdown and search */}
<div className="md:px-10 lg:px-24 pb-5 flex justify-between items-center">
<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="border px-3 py-2 flex items-center gap-2 my-2 bg-cyan-300 rounded-md ">Category <FaChevronDown/> </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-box w-52">
    <li><a>Technology</a></li>
    <li><a>Web Development</a></li>
    <li><a>Design</a></li>
    <li><a>Artificial Intelligence</a></li>
    <li><a>Mobile Development</a></li>
    <li><a>Data Science</a></li>
  </ul>
</div>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>
</div>
      <hr />
      <div className="md:px-24 grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
      {blogs?.map(blog=> <BlogsCard key={blog._id} blog={blog}></BlogsCard>)}
      </div>
    </div>
  );
};

export default AllBlogs;