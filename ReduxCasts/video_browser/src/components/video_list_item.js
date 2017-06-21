import React from "react";

// Whenever we need something from parent. We need props!
// const VideoListItem = (props) => {  // Version 1: non-ES6 systnax
// const video = props.video // Version 1: non-ES6 systnax

// const VideoListItem = ({video}) => { Version 2: ES6 systnax
// It means the first argument has a property called video, and create a video object.

// ({ video, onVideoSelect }) : Es6 - Pull multiple properties of the props's object it is equal to..
// const video = props.video
// const onVideoSelect = props.onVideoSelect
const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
