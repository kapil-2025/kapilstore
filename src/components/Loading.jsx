import React from "react";

const Loading = React.memo(function Loading({ loadingText }) {
  return (
    <div className="loadingBox">
      <div className="loader"></div>

      <h2>{loadingText}</h2>
    </div>
  );
});

export default Loading;