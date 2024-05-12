import Lottie from "lottie-react";
import faq from "../../../public/faq.json"


const Review = () => {
  return (
   <div className="mb-10">
    <h2 className="text-3xl font-bold text-center mb-10">Are you Confused??</h2>
    <div className="flex ">
      {/* accordian */}
    <div className="md:mx-10 lg:mx-24 space-y-3 p-4 rounded-md w-3/6 border-2">
      <div className="collapse">
  <input type="radio" name="my-accordion-1"  /> 
  <div className="collapse-title text-xl font-medium border-b-2">
  What are the key takeaways from this blog site?
  </div>
  <div className="collapse-content"> 
    <p>The key takeaways from this blog site include tech related updates, news, key features, providing readers with actionable insights or valuable information to enhance their understanding of the topic.</p>
  </div>
</div>
<div className="collapse">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium border-b-2">
  Can readers engage with this blog post through comments or social media?
  </div>
  <div className="collapse-content"> 
    <p>Yes, readers are encouraged to engage with this blog post by [mentioning specific actions, such as leaving comments, sharing on social media, or participating in discussions], fostering interaction and community engagement.</p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium border-b-2">
  Are there any additional resources or further reading related to this blog post?
  </div>
  <div className="collapse-content"> 
    <p> Yes, readers interested in exploring the topic further can provide links to related articles, resources, books, or websites, expanding their knowledge and understanding beyond the scope of this blog post.</p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium border-b-2">
  How can readers support or contribute to the content creation process?
  </div>
  <div className="collapse-content"> 
    <p> Readers can support the content creation process by [suggesting topics for future blog posts, providing feedback or suggestions, sharing their own experiences or insights], helping to shape the direction and quality of future content.</p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium border-b-2">
  How does this blog post contribute to the overall theme or focus of the blog?
  </div>
  <div className="collapse-content"> 
    <p> This blog post aligns with the overarching theme or focus of our blog by [describe how the post relates to the blog's theme or focus], ensuring consistency and relevance for our audience.</p>
  </div>
</div>
    </div>
    <div className="w-3/6 md:block hidden">
    <Lottie loop={true} animationData={faq} className="w-full" />
    </div>
    </div>
    </div>
  );
};

export default Review;