import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import Swal from "sweetalert2";
import { motion } from "framer-motion"


const BlogsCard = ({blog, ref}) => {
  const { user } = useContext(AuthContext)
  const {title, image, short_description, category, posted_date, _id} = blog

  const handleWishList = ()=>{
    
    const userEmail = user.email
    const wishlistCard = {blog, userEmail}
    fetch('http://localhost:5000/wishlist',
    {
    method: "POST",
    headers:{
    "content-type" : "application/json"
    },
    body: JSON.stringify(wishlistCard)
    })
    .then(res=> res.json())
    .then(data=> {
    console.log(data)
    if(data.insertedId){
    
    Swal.fire({
    title: 'Success!',
    text: 'Successfully added to wishlist',
    icon: 'success',
  
    })
    }
    
    })
  }
  return (
    <motion.div  whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 1.1 }}
    drag="x" 
    dragConstraints={{ left: -20, right: 0 }}
    className="w-72 text-start bg-[#aba6a613] p-4">
      <div className="relative">
      <img src={image} alt={title} className="w-72 h-44 rounded-lg"/>
      <h3 className="bg-[#4f68b896] w-fit rounded-lg px-1 absolute top-0 right-0 z-10 text-white">{category}</h3>
      </div>
     
      <div className="mb-5">
        <h2 className="py-2 text-xl font-semibold">{title}</h2>
        <p className="font-sand ">{short_description}</p>
      </div>
      <div className="flex justify-between items-center">
      <Link to={`/all-blogs/${_id}`} className="px-4 py-2 border ">View Details</Link>
      {user && <button  onClick={handleWishList} data-tip={"add to wishlist"} className="w-8 h-8 tooltip rounded-full border-2 flex items-center justify-center text-2xl font-bold text-red-500"><CiHeart/></button>}
      </div>
    </motion.div>
  );
};

export default BlogsCard;