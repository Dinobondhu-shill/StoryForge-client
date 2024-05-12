import video from '../../../public/video.mp4'

const Category = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10">Explore what people say,,,</h2>
      <video autoPlay loop muted src={video}></video>
    </div>
  );
};

export default Category;