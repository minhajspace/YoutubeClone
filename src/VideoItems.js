import React from "react";
const VideoItems = ({ video }) => {
  return (
    <div className="item">
      <img
        className="
        ui
        avatar
        image"
        alt={video.snippet.thumbnails.description}
        src={video.snippet.thumbnails.default.url}
      />
      {video.snippet.title}
    </div>
  );
};

export default VideoItems;
