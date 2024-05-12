import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FeaturedBlog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/featured-blog")
    .then(res=> res.json())
    .then(data=> setBlogs(data))
  },[])

  
  
    return (
      <div className="overflow-x-auto md:px-10 lg:px-24 my-10 ">
      <table className="table text-black">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
               <p>SL No.</p>
              </label>
            </th>
            <th>Blog Owner</th>
            <th>Title</th>
            <th>Posted on</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
       {
        blogs.slice(0,10).map(( blog, index) =>  <tr key={blog._id}>
          <th>
            <label>
              <p>{index+1}.</p>
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                  <img src={blog?.photoOfOwner} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{blog?.postedBy}</div>
              </div>
            </div>
          </td>
          <td>
            {blog.title}
            <br/>
            
          </td>
          <td>{blog?.posted_date}</td>
          <th>
            <Link to={`/all-blogs/${blog._id}`}>Details</Link>
          </th>
        </tr>)
       }
         
        </tbody>
        
      </table>
    </div>
    )
};

export default FeaturedBlog;