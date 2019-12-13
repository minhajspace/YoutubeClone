import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videos }) => {
  const renderlist = videos.map(video => {
    return <VideoItems video={video} />;
  });
  return <div>{renderlist}</div>;
};

export default VideoList;
