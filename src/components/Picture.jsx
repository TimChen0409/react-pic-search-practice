import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        <a target="_blank" href={data.src.large} rel="noreferrer">
          Open link in new window to download
        </a>
      </p>
    </div>
  );
};

export default Picture;
