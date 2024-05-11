
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

const WishlistCard = ({item}) => {
  const {_id} = item
const data= item?.blog
const {image, short_description, title, posted_date, category, } = data

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
    fetch(`http://localhost:5000/wishlist/${_id}`,
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
      <div className='flex gap-5'>
      <img src={image} alt="" className='w-72 h-44 rounded-md'/>
      <div className="mb-5">
        <h2 className="py-2 text-xl font-semibold">{title}</h2>
        <p># Posted on: {posted_date}</p>
        <p className="font-sand ">{short_description}</p>
      </div>
    </div>
    <div className="flex justify-between items-center">
      <Link to={`/all-blogs/${_id}`} className="px-4 py-2 border ">View Details</Link>
      <button 
      onClick={()=> handleDeleteWishlist(_id)}
       data-tip={"Delete"} className="w-8 h-8 tooltip rounded-full border-2 flex items-center justify-center text-2xl font-bold text-red-500"><MdDelete/></button>
      </div>
    </div>
    
  );
};

export default WishlistCard;