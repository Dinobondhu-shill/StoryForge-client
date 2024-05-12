
import Marquee from "react-fast-marquee";
import BlogsCard from "../components/BlogsCard";
import { useEffect, useState } from "react";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([])
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState([])

useEffect(()=>{
  fetch(`http://localhost:5000/blogs?filter=${filter}&search=${search}`)
  .then(res=> res.json())
  .then(data=> setBlogs(data))
},[filter, search])

const handleSerch = (e) =>{
  e.preventDefault()
  const searchText = e.target.search.value
setSearch(searchText)
}

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
  <select
    onChange={e => setFilter(e.target.value)}
    name='category'
    id="category"
    value={filter}
    className="absolute z-10 inset-x-0 mt-1 bg-base-100 border rounded-md w-52">
    <option value="Technology">Technology</option>
    <option value="Web Development">Web Development</option>
    <option value="Design">Design</option>
    <option value="Artificial Intelligence">Artificial Intelligence</option>
    <option value="Mobile Development">Mobile Development</option>
    <option value="Data Science">Data Science</option>
  </select>
</div>
<form onSubmit={handleSerch} 
className="input input-bordered mt-5 flex items-center gap-2">
  <input type="text" name="search" className="grow" placeholder="Search" />
  <button type="submit"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70 z-10"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></button>
</form>
</div>
      <hr />
      <div className="md:px-24 grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
      {blogs?.map(blog=> <BlogsCard key={blog._id} blog={blog}></BlogsCard>)}
      </div>
    </div>
  );
};

export default AllBlogs;