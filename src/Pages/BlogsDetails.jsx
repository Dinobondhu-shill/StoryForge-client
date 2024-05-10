import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseProvider";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";


const BlogsDetails = () => {
  const blog = useLoaderData()
  const {title, image, long_description, category, posted_date, _id} = blog;
  const {user} = useContext(AuthContext)


  const handleComment = (e) =>{
    e.preventDefault();
    const form = e.target
    const comment = form.comment.value;
    const postId = _id;
    const photo = user?.photoURL
    const name = user?.displayName
    const postComment = {comment, postId, photo, name }
    fetch('http://localhost:5000/comments',
{
method: "POST",
headers:{
"content-type" : "application/json"
},
body: JSON.stringify(postComment)
})
.then(res=> res.json())
.then(data=> {
console.log(data)
if(data.insertedId){
toast.success('Thanks for commenting')
form.reset()
}

})
  }
  return (
    <div className="md:px-10 lg:px-24 my-5">
      <ToastContainer></ToastContainer>
      <div >
        <img src={image} alt={title} className="w-full h-80 rounded-sm object-cover"/>
        <h3 className="bg-[#4f68b863] my-4 w-fit rounded-lg px-3 py-1 text-white">#{category}</h3>
      </div>
      <div className="mb-5">
        <h2 className="pt-2 text-3xl font-semibold">{title}</h2>
        <p className="pb-5">Posted on: {posted_date}</p>
        <p className="font-sand text-[18px]">{long_description}</p>
      </div>
      <hr />
      {/* comment area */}
      <div className="mt-10 w-full">
        <h2>Add Your Comment</h2>
        <form onSubmit={handleComment}>
        <textarea name="comment" className="textarea textarea-bordered w-2/4 mt-2 " placeholder="Write your comment here"></textarea>
        <input type="submit" value="Comment" className="block btn bg-cyan-200 hover:bg-cyan-300"/>
        </form>
      </div>
      {/* show the -comment here */}
      <div>

      </div>
    </div>
  );
};

export default BlogsDetails;