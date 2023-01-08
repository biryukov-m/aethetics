import React from "react";
import Slider from "../slider/Slider";
import FirstView from "../first-view/FirstView";
import BlogFeed from "../blog-feed/BlogFeed";
const Main: React.FC = () => (
  <>
    <FirstView />
    <Slider />
    <BlogFeed />
  </>
);

export default Main;
