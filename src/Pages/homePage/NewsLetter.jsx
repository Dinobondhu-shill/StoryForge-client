import Lottie from 'lottie-react';
import newsletter from '../../../public/newsletter.json'

const NewsLetter = () => {
  return (
    <div className='w-full flex justify-center flex-col items-center  py-10 bg-[#53a4cd74] px-24 '>
    <div>
    <Lottie loop={true} animationData={newsletter} className="w-40" />
    </div>
   <div className='text-center'>
    <h2 className='text-3xl pt-16  font-bold font-fajila'>Subscribe storyForge, for getting update</h2>
    <p className='my-8'>subscribe with your email and get regular update of our upcoming and recent feture.</p>
    <div className='bg-white max-w-sm mt-16 mx-auto flex justify-between'>
      <input type="email" placeholder='Enter your Email' className='pl-4'/>
      <div className='bg-[#B1D6E8]'>
      <button className='bg-[#4d98de] rounded-br-2xl py-3 px-5'>Subscribe</button>
      </div>
    </div>
   </div>
</div>
  );
};

export default NewsLetter;