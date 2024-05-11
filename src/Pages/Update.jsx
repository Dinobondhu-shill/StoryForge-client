
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
const blog = useLoaderData()
const navigate = useNavigate()
const {title, image,short_description, long_description, category, _id} = blog;

// upadate the blog
const handleUpdateBlog= (e)=>{
  e.preventDefault()
  const form = e.target;
  const title = form.title.value
  const category = form.category.value
  const short_description = form.short_description.value 
  const image = form.image.value 
  const long_description = form.long_description.value
  const updatedBlog = {title, category, short_description, long_description, image}
  console.log(updatedBlog)
  fetch(`http://localhost:5000/all-blogs/${_id}`,
    {
      method: "PUT",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(updatedBlog)
    })
      .then(res=> res.json())
      .then(data=> {
        console.log(data)
        if(data.modifiedCount){
          
          Swal.fire({
            title: 'Success!',
            text: 'Blog Update Successfully',
            icon: 'success',
            confirmButtonText: 'Close'
          })
          navigate(`/all-blogs/${_id}`)
        }
        
      })
  }

  return (
    <div className='md:px-10 lg:px-24'>
     
              <h2 className="my-3 text-center text-3xl">Update What's new</h2>
            <form className='space-y-5'
             onSubmit={handleUpdateBlog}
            >
      {/* form row-1 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-1/2">
          <h5 className="font-normal text-lg pl-2">Blog Title</h5>
          <input type="text" name="title" defaultValue={title}  className="input input-bordered w-full" />

        </div>

        <div className="mb-2 w-1/2">
          <h5 className="font-normal text-lg pl-2">Category:</h5>
          <select name="category" defaultValue={category} className="select select-bordered w-full">
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
          <input type="text" name="image" defaultValue={image} placeholder="Enter relevent image link" className="input input-bordered w-full" />

        </div>
        <div className="mb-2 w-1/2">
          <h5 className="font-normal text-lg pl-2">Short Description:</h5>
          <input type="text" name="short_description" defaultValue={short_description} placeholder="Enter short description" className="input input-bordered w-full" />
        </div>
        
      </div>
      {/* form row-2 */}
      <div className="w-full flex gap-5">
        <div className="mb-2 w-full">
          <h5 className="font-normal text-lg pl-2">Long Description:</h5>
          <input type="text" name="long_description" defaultValue={long_description} placeholder="Write your thought here"
            className="input input-bordered w-full" />

        </div>

      </div>
      <button type="submit" className="btn btn-block bg-[#63c0cdb1] px-5 hover:bg-[#63c0cdb1]  "> Update </button>
    </form>
    </div>
  );
};

export default Update;