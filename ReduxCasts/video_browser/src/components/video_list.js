import React from "react";
import VideoListItem from "./video_list_item";

// const VideoList = () => { Version 1 原本上面個層無pass野入黎， <VideoList />
// const VideoList = (props) => { //Version 2 - We passed the some value from partent,so we needa use props to retrive that parent value.
// Version 3 - Cuz only on parameter, no needa use parentheses
const VideoList = props => {

  const videoItems = props.videos.map(video => {  // array.map( function(one_array_element){return one_array_element;} )
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}  //Passed from parent (class App)
        key={video.etag} // Each list item must include a item key! (React need us to do so!)
        video={video}
      />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
