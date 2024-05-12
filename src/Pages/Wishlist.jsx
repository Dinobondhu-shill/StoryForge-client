import { useContext} from "react";
import { AuthContext } from "../firebase/FirebaseProvider";
import WishlistCard from "../components/WishlistCard";
import { useQuery } from "@tanstack/react-query";


const Wishlist = () => {
  const { user } = useContext(AuthContext)
  const email = user?.email

  const { isPending, data: wishlist } = useQuery({
    queryKey: ['blogs'],
    queryFn: async ()=> {
      const res = await  fetch(`https://storyforge-server.vercel.app/wishlist/${email}`)
      return res.json()
    }
  })
  
  if(isPending) return <span className="loading block mx-auto text-6xl text-center loading-spinner text-info "></span>
  return (
    <div className="md:px-10 my-10">
      <h2 className="text-center text-4xl ">Here is your Wishlist!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-10">
      {wishlist && wishlist?.map(item => <WishlistCard key={item._id} item={item}/>)}
      </div>
    </div>
  );
};

export default Wishlist;