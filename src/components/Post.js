import React from "react";
import { Avatar } from "@mui/material";
import { ChatBubbleOutline, FavoriteBorder, IosShare, Repeat, Verified } from "@mui/icons-material";

function Post({ displayName, userName, verificaton, image, avatar, text }) {
  return (
    <div className="flex p-3 border-b-[1px]">
      <div className="">
        <Avatar src="https://www.pngfind.com/pngs/m/14-141135_download-mark-zuckerberg-png-image-mark-zuckerberg-transparent.png" className="mr-3" />
      </div>
      <div className="">
        <div className="">
          <div className="">
            <h3 className="font-semibold ">
              Zelipha Wambui
              <span className="text-gray-500 !font-normal !ml-1">
                <Verified fontSize="small" color="primary" /> @Miss_zeliq
              </span>
            </h3>
          </div>
          <div className=" mt-2">
            <p>Every single time you focus on the positive, you bring more light into your life, light removes all darkness.</p>
          </div>
        </div>
        <img src="https://media.giphy.com/media/IVEIuCwXmZnQhMll03/giphy.gif" alt="" className="rounded-2xl mt-3" />
        <div className="mt-3 space-x-24">
          <ChatBubbleOutline fontSize="small" className="cursor-pointer" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <IosShare fontSize="small" />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Post;
