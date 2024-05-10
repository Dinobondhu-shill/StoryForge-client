

const Banner = () => {
  return (
    <div className="carousel w-full h-[500px] relative">
      <div className='w-full h-full absolute top-0 left-0 bg-[#0000003a] z-10'></div>
      {/* slide o=1 */}
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/N02G4TfP/pexels-kaboompics-6335.jpg" className="w-full object-cover" />
    <div className="absolute flex right-5 bottom-5 gap-5">
      <a href="#slide4" className="btn btn-circle bg-[#000000a4] z-50 text-white">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-[#000000a4] z-50 text-white">❯</a>
    </div>
    <div className='absolute top-1/3 left-10 z-50 w-2/3 text-[#acf2fad5]'>
      <h3 className='text-5xl font-semibold'>Discover, Learn, Connect storyForge for Diverse Insights</h3>
    </div>
  </div> 
      {/* slide 2 */}
  <div id="slide2" className="carousel-item relative w-full">
  <div className='w-full h-full absolute top-0 left-0 bg-[#0000003a] z-10'></div>
    <img src="https://i.postimg.cc/BZjW1sbM/pexels-janetrangdoan-723072.jpg" className="w-full object-cover" />
    <div className="absolute flex right-5 bottom-5 gap-5">
      <a href="#slide1" className="btn btn-circle bg-[#000000a4] z-50 text-white">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-[#000000a4] z-50 text-white">❯</a>
    </div>
    <div className='absolute top-1/3 left-10 z-50 w-2/3 text-[#acf2fad5]'>
      <h3 className='text-5xl font-semibold'>Discover, Learn, Connect storyForge for Diverse Insights</h3>
    </div>
  </div> 
      {/* slide 3 */}
  <div id="slide3" className="carousel-item relative w-full">
  <div className='w-full h-full absolute top-0 left-0 bg-[#0000003a] z-10'></div>
    <img src="https://i.postimg.cc/qMK9jL8K/pexels-thisisengineering-19895722.jpg" className="w-full object-cover" />
    <div className="absolute flex right-5 bottom-5 gap-5">
      <a href="#slide2" className="btn btn-circle bg-[#000000a4] z-50 text-white">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-[#000000a4] z-50 text-white">❯</a>
    </div>
    <div className='absolute top-1/3 left-10 z-50 w-2/3 text-[#acf2fad5]'>
      <h3 className='text-5xl font-semibold'>Discover, Learn, Connect storyForge for Diverse Insights</h3>
    </div>
  </div> 
      {/* slide 4*/}
  <div id="slide4" className="carousel-item relative w-full">
  <div className='w-full h-full absolute top-0 left-0 bg-[#0000003a] z-10'></div>
    <img src="https://i.postimg.cc/Nj4Rc36w/pexels-visitalmaty-848618.jpg" className="w-full object-cover" />
    <div className="absolute flex right-5 bottom-5 gap-5">
      <a href="#slide3" className="btn btn-circle bg-[#000000a4] z-50 text-white">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-[#000000a4] z-50 text-white">❯</a>
    </div>
    <div className='absolute top-1/3 left-10 z-50 w-2/3 text-[#acf2fad5]'>
      <h3 className='text-5xl font-semibold'>Discover, Learn, Connect storyForge for Diverse Insights</h3>
    </div>
  </div> 
  
</div>
  );
};

export default Banner;