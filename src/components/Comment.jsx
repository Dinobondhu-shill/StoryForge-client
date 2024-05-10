

const Comment = ({item}) => {
 const {comment, postId, photo, name } = item
  return (
    <div className="py-2 px-4 border-2 rounded-lg flex items-center gap-5">
      <div>
      <img src={photo} alt="" className="w-16 h-16 rounded-full"/>
      </div>
      <div>
        <h2 className=" font-bold">{name}</h2>
        <p className="font-normal font-sand">{comment}</p>
      </div>
    </div>
  );
};

export default Comment;