import React from "react";
import Slider from "../slider/Slider";
import FirstView from "../first-view/FirstView";
import BlogFeed from "../blog-feed/BlogFeed";
import BottomContacts from "../bottom-contacts/BottomContacts";

const Main: React.FC = () => (
  <>
    <FirstView />
    <Slider />
    <BlogFeed />
    <BottomContacts />
  </>
);

export default Main;
