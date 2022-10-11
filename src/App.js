import React from "react";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import "./index.css";

function App() {
  return (
    <div className="flex h-screen max-w-[1300px] mx-auto px-5 py-0">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
