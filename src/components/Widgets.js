import { Search } from "@mui/icons-material";
import React from "react";

function Widgets() {
  return (
    <div className="flex-0.3  ml-10 mt-5">
      <div className="sticky top-0 py-1.5 bg-gray-100 rounded-3xl p-4">
        <Search className=" " />
        <input placeholder="Search Twitter" type="text" className="outline-none bg-gray-100 ml-3" />
      </div>

      <div className="mt-5 bg-gray-100 rounded-lg p-4">
        <h2 className="text-xl font-semibold">Trends for you</h2>
      </div>
    </div>
  );
}

export default Widgets;
