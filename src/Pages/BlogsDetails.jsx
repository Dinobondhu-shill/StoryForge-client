import { useLoaderData } from "react-router-dom";


const BlogsDetails = () => {
  const blog = useLoaderData()
  const {title, image, long_description, category, posted_date, _id} = blog
  return (
    <div className="md:px-10 lg:px-24 my-5">
      <div >
        <img src={image} alt={title} className="w-full h-80 rounded-sm object-cover"/>
        <h3 className="bg-[#4f68b863] my-4 w-fit rounded-lg px-3 py-1 text-white">#{category}</h3>
      </div>
      <div className="mb-5">
        <h2 className="pt-2 text-3xl font-semibold">{title}</h2>
        <p className="pb-5">Posted on: {posted_date}</p>
        <p className="font-sand text-[18px]">{long_description}</p>
      </div>
      <hr />
      {/* comment area */}
      <div className="mt-10 w-full">
        <h2>Add Your Comment</h2>
        <form >
        <textarea className="textarea textarea-bordered w-2/4 mt-2 " placeholder="Write your comment here"></textarea>
        <input type="submit" value="Comment" className="block btn bg-cyan-200 hover:bg-cyan-300"/>
        </form>
      </div>
    </div>
  );
};

export default BlogsDetails;