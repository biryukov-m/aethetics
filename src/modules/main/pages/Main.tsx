import React from 'react';
import Slider from '../../common/slider/Slider';
import FirstView from '../components/first-view/FirstView';
import BlogFeed from '../../blog/pages/blog-feed/BlogFeed';

const Main: React.FC = () => (
  <>
    <FirstView />
    <Slider />
    <BlogFeed />
  </>
);

export default Main;
