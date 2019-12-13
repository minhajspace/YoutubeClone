import React from "react";
import VideoItems from "../VideoItems";

const VideoList = ({ videos }) => {
  const renderlist = videos.map(video => {
    return <VideoItems video={video} />;
  });
  return <div className=" ui relaxed divided">{renderlist}</div>;
};

export default VideoList;
