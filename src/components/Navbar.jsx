// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


 const Navbar = <>
 <NavLink to={'/'}
  style={({ isActive,}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "#206463b1" : "black",
      
      
    };
  }}>Home</NavLink>
  <NavLink to={'/all-items'}
  style={({ isActive,}) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "#206463b1" : "black",
      
    };
  }}>Art & Craft Item</NavLink>
  
  
 </>
  
  return (
    <div>
      <div className="flex justify-center py-3 border-b-2">
  <Link to={"/"} className=" text-3xl font-caption font-bold">story<span className="text-[#9e1de3d2]">Forge</span></Link>
</div>
      <div className="navbar flex justify-between pt-4 md:px-10 font-sand">
<div className="dropdown lg:hidden z-30">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    </div>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    {Navbar}
    </ul>
  </div>
  <div className="flex-0 hidden lg:block mr-4">
    <ul data-aos="flip-left" data-aos-duration="1000" className="flex gap-4">
      {Navbar}
    </ul>
  </div>
<div className="flex-0 gap-2">
  
{
    //   user ? <>
    //   <div  data-tip={user?.displayName}  className="btn-circle avatar tooltip ml-3">
    //     <div className="w-10 rounded-full " >
    //       <img data-aos="zoom-in" data-aos-delay="50" src={user?.photoURL}/>
    //     </div>
    //   </div>
    
    // <Link data-aos="fade-up-left"
    // //  onClick={()=> logOut()} 
    // className="font-caption hover:scale-105 font-bold border-2 py-2 px-4 rounded-md ">Log out</Link>
    //   </>  : 
    <div className="flex gap-4">
      <Link data-aos="fade-up-left" to={'/login'} className="font-caption hover:scale-105 ml-2 font-bold border-2 py-2 px-4 rounded-md ">Log In</Link>
      <Link data-aos="fade-up-left" to={'/register'} className="font-caption hover:scale-105  font-bold border-2 py-2 px-4 rounded-md ">Sign Up</Link>
      </div>
    }

</div>
</div>
    </div>
  );
};

export default Navbar;