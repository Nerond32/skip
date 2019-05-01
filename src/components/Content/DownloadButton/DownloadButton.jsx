import React from "react";

const DownloadButton = props => {
  return (
    <button id="downloadButton" onClick={props.download}>
      Download as powershell file
    </button>
  );
};

export default DownloadButton;
