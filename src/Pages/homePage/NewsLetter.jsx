import Lottie from 'lottie-react';
import newsletter from '../../../public/newsletter.json'
import { ToastContainer, toast } from 'react-toastify';

const NewsLetter = () => {
  const handleSubscribe = (e) =>{
    e.preventDefault()
    // console.log(e.target.email.value.length)
    // if(e.target.email.value.length > 15){
      
    // }
    toast.success("Thanks For Subscribing")
  }
  return (
    <div className='w-full flex justify-center flex-col items-center  py-10 bg-[#53a4cd74] px-24 '>
    <div>
    <Lottie loop={true} animationData={newsletter} className="w-40" />
    </div>
    <ToastContainer/>
   <div className='text-center'>
    <h2 className='text-3xl pt-16  font-bold font-fajila'>Subscribe storyForge, for getting update</h2>
    <p className='my-8'>subscribe with your email and get regular update of our upcoming and recent feture.</p>
    
     <form onSubmit={handleSubscribe}>
     <div className='bg-white max-w-sm mt-16 mx-auto flex justify-between'>
     <input type="email" name='email' placeholder='Enter your Email' required className='pl-4 outline-none w-full'/>
      <div className='bg-[#B1D6E8]'>
      <input type="submit" value="Subscribe" className='bg-[#4d98de] cursor-pointer rounded-br-2xl py-3 px-5 z-30'/>
      </div>
      </div>
     </form>
   </div>
</div>
  );
};

export default NewsLetter;