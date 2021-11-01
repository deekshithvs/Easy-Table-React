import React, { useEffect, useState } from "react";

export const Post = () => {
  const [liked, setLiked] = useState(false);
  const [likeImgURL, setLikeImgURL] = useState(
    "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png"
  );

  useEffect(() => {
    liked
      ? setLikeImgURL(
          "https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Like-Icon-PNG-715x715.png"
        )
      : setLikeImgURL(
          "https://cdn2.iconfinder.com/data/icons/instagram-ui/48/jee-68-512.png"
        );
  }, [liked]);
  return (
    <div className="post">
      <div classname="post-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRablv-ydUy6FV-tKMJ91-lTgzkEYICUJ4kGQ&usqp=CAU"
          alt=""
        />
      </div>
      <div classname="post-meta">
        <div className="like">
          <img src={likeImgURL} alt="" onClick={() => setLiked(!liked)} />
        </div>
        <p className="likes-meta"> x likes </p>
      </div>
    </div>
  );
};
