

const BlogsCard = ({blog}) => {
  const {title, image, short_description, category, posted_date, _id} = blog
  return (
    <div className="w-72 text-start">
      <div className="relative">
      <img src={image} alt={title} className="w-72 h-44 rounded-lg"/>
      <h3 className="bg-[#4f68b896] w-fit rounded-lg px-1 absolute top-0 right-0 z-10 text-white">{category}</h3>
      </div>
     
      <div>
        <h2 className="py-2 text-xl font-semibold">{title}</h2>
        <p className="font-sand ">{short_description}</p>
      </div>
    </div>
  );
};

export default BlogsCard;