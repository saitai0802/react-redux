import React from "react";

// Whenever we need something from parent. We need props!
// const VideoDetail = (props) => {  // Version 1: non-ES6 systnax
const VideoDetail = ({ video }) => {

  // Some parent objects just can't fetch infor. fast enough to satisfy the needs of a child object
  // If we don't check right here, there will be a error at  video.id.videoId
  // Error: Can't read property 'id' of undefined
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  // const url = 'https://www.youtube.com/embed/' + videoId; // Version 1: non-ES6
  const url = `https://www.youtube.com/embed/${videoId}`; // Version 2: ES6 - String interpolation or template strings

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
