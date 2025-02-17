
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const WishlistCard = ({item}) => {
  const {_id, blog} = item
const image = blog?.image
const short_description = blog?.short_description
const title = blog?.title
const posted_date = blog?.posted_date
const category = blog?.category
const post_id = blog?._id

const handleDeleteWishlist = (_id) =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
    }).then((result) => {
    if (result.isConfirmed) {
    fetch(`https://storyforge-server.vercel.app/wishlist/${_id}`,
    {
    method:"DELETE",
    
    }
    )
    .then(res=> res.json())
    .then(data=>{
    if(data.deletedCount > 0){
    Swal.fire({
    title: "Deleted!",
    text: "Your wishlist blog has been deleted.",
    icon: "success"
    });
    }
    })
    
    }
    });
}

  return (
    <div className='border p-2 rounded-md  gap-3'>
      <div className='flex flex-col md:flex-row gap-5'>
      <img src={image} alt="" className='md:w-72 w-full h-44 rounded-md'/>
      <div className="mb-5">
        <h2 className="py-2 text-xl font-semibold">{title}</h2>
        <p>Posted on: {posted_date}</p>
        <p className="bg-[#4f68b896] w-fit rounded-lg px-1 my-2"> #{category}</p>
        <p className="font-sand ">{short_description}</p>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <Link to={`/all-blogs/${post_id}`} className="px-4 py-2 border ">View Details</Link>
      <button 
      onClick={()=> handleDeleteWishlist(_id)}
       data-tip={"Delete"} className="w-8 h-8 tooltip rounded-full border-2 flex items-center justify-center text-2xl font-bold text-red-500"><MdDelete/></button>
      </div>
    </div>
    
  );
};

export default WishlistCard;