import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p4 className="">{video.snippet.description}</p4>
      </div>
    </div>
  );
};
export default VideoDetails;
