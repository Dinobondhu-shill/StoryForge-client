import React from 'react';

const Banner = () => {
  return (
    <div className="carousel w-full h-[500px] relative">
      <div className='w-full h-full absolute top-0 left-0 bg-[#0000003a] z-10'></div>
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex right-5 top-5 gap-5">
      <a href="#slide4" className="btn btn-circle bg-[#000000a4] z-50 text-white">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#000000a4] z-50 text-white">❯</a>
    </div>
    <div className='absolute top-1/3 left-5 z-50 w-2/3 text-[#acf2fad5]'>
      <h3 className='text-5xl font-semibold'>Discover, Learn, Connect storyForge for Diverse Insights</h3>
    </div>
  </div> 
  
</div>
  );
};

export default Banner;