import React from "react";
import {imgList} from "../imagelist";

export const Images = props => {
  const { index, like } = props;
  return (
    <button onClick={like}>
      <img src={imgList[index]} alt="img" style={{ height: 250, width: 250 }} />
    </button>
  );
};