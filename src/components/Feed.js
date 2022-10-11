import React, { useState } from "react";
import Post from "./Post";
import TweetBox from "./TweetBox";

function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div className=" feed overflow-y-scroll flex-grow-1 w-2/5 border-x-[1px] max-w-lg">
      <section className="sticky top-0 px-4 py-6 bg-white z-[100]">
        <h1 className="text-[1.25rem] font-bold">Home</h1>
      </section>

      <TweetBox />

      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
