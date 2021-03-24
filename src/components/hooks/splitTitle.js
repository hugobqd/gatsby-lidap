import React from "react";

const breakOrNot = (begin) => {
  if (begin.length > 3) {
    return <br />;
  }
  return "";
};

export const splitTitle = (title = "") => {
  const words = title.split(" ");

  const splitHalf = (title) => {
    let mid = Math.floor(title.length / 2);
    let i = mid - 1,
      j = mid,
      sep = mid;
    while (j < title.length) {
      if (title[i] === " ") {
        sep = i + 1;
        break;
      }
      if (title[j] === " ") {
        sep = j + 1;
        break;
      }
      i--;
      j++;
    }

    return [
      title.slice(0, sep),
      breakOrNot(title.slice(0, sep)),
      title.slice(sep),
    ];
  };

  if (words.length === 1) {
    return title;
  }
  if (title.length > 30) {
    return title;
  }
  return splitHalf(title);
};
