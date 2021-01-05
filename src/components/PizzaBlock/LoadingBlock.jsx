import React from "react";
import ContentLoader from "react-content-loader";

export default function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={1}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="292" rx="4" ry="4" width="280" height="26" />
      <rect x="0" y="330" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="420" rx="0" ry="0" width="82" height="35" />
      <rect x="80" y="315" rx="0" ry="0" width="2" height="1" />
      <rect x="149" y="418" rx="18" ry="18" width="128" height="36" />
    </ContentLoader>
  );
}

//export default LoadingBlock;
