import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-4 grid grid-cols-[auto,1fr] gap-4 border-b-[1px]">
      <form>
        <div className="flex ">
          <Avatar className="mr-4" src="https://www.pngfind.com/pngs/m/14-141135_download-mark-zuckerberg-png-image-mark-zuckerberg-transparent.png" />
          <textarea placeholder="What's happening?" rows="2" className="bg-transparent outline-none text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" />
        </div>
        <div className="ml-96">
          <Button variant="contained" size="small" className=" !rounded-3xl !mt-10 !mb-2 !hover:bg-sky-100 !hover-transition">
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;
