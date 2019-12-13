import React from "react";
import VideoItems from "./VideoItems";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderlist = videos.map(video => {
    return <VideoItems onVideoSelect={onVideoSelect} video={video} />;
  });
  return <div className=" ui relaxed divided">{renderlist}</div>;
};

export default VideoList;
