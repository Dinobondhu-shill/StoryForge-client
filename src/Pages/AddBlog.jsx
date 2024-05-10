import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import Swal from "sweetalert2";


const AddBlog = () => {
const {user} = useContext(AuthContext)
const handleAddBlog = e =>{
  e.preventDefault();
  const form = e.target;
  const title = form.title.value
  const category = form.category.value
  const image = form.image.value
  const short_description = form.short_description.value
  const long_description = form.long_description.value
  const postedBy = user.displayName
  const postedEmail = user.email
  const photoOfOwner = user.photoURL
  const blog = {title,category, image, short_description, long_description,postedBy, postedEmail, photoOfOwner}


  fetch('http://localhost:5000/add-blog',
{
method: "POST",
headers:{
"content-type" : "application/json"
},
body: JSON.stringify(blog)
})
.then(res=> res.json())
.then(data=> {
console.log(data)
if(data.insertedId){

Swal.fire({
title: 'Success!',
text: 'Blog added Successfully',
icon: 'success',
confirmButtonText: 'Thank you sharing'
})
form.reset()
}

})

}

  return (
    <div className="md:px-10 lg:px-24 my-10">
      <div className="text-center text-black">
        <h2 className="text-2xl text-center mb-3">Share your thought to the world!</h2>
        <p>Ready to make your mark? Dive in and start crafting your next blog post. Your insights have the <br /> power to inform, inspire, and ignite change. Happy Blogging!</p>
      </div>
      {/* collecting information for create a post for blog */}
      <div className="mt-8">
      <form onSubmit={handleAddBlog}>
      {/* form row-1 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-normal text-lg pl-2">Blog Title</h5>
          <input type="text" name="title" placeholder="Enter Blog Title" className="input input-bordered w-full" />

        </div>

        <div className="mb-2 w-1/2">
          <h5 className="font-normal text-lg pl-2">Category:</h5>
          <select name="category" className="select select-bordered w-full">
            <option value="Technology">Technology</option>
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Data Science">Data Science</option>
          </select>

        </div>

      </div>
      {/* form row-2 */}
      <div className="w-full  flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-normal text-lg pl-2">PhotoURL:</h5>
          <input type="text" name="image" placeholder="Enter relevent image link" className="input input-bordered w-full" />

        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-normal text-lg pl-2">Short Description:</h5>
          <input type="text" name="short_description" placeholder="Enter short description" className="input input-bordered w-full" />
        </div>
        
      </div>
      {/* form row-2 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-full">
          <h5 className="font-normal text-lg pl-2">Long Description:</h5>
          <input type="text" name="long_description" placeholder="Write your thought here"
            className="input input-bordered w-full" />

        </div>

      </div>
      <button type="submit" className="btn btn-block bg-[#63c0cdb1] hover:bg-[#63c0cdb1] "> Post</button>
    </form>
      </div>
    </div>
  );
};

export default AddBlog;