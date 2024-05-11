import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import WishlistCard from "../components/WishlistCard";


const Wishlist = () => {
  const { user } = useContext(AuthContext)
  const email = user?.email

  const [wishlist, setWishlist] = useState(null)

  useEffect(()=>{
    fetch(`http://localhost:5000/wishlist/${email}`)
    .then(res=>res.json())
    .then(data=> setWishlist(data))
  },[email])

  if( wishlist === null) return <h2 className="text-3xl mt-10 mx-24 text-center">Your Wishlist is empty..</h2>
  return (
    <div className="md:px-10 my-10">
      <h2 className="text-center text-4xl ">Here is your Wishlist!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-10">
      {wishlist.map(item => <WishlistCard key={item._id} item={item}/>)}
      </div>
    </div>
  );
};

export default Wishlist;