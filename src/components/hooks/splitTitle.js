import React from "react";
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
    const breakOrNot = (begin) => {
      console.log(begin, begin.length > 3);
      if (begin.length > 3) {
        return <br />;
      }
      return "";
    };
    return [
      title.slice(0, sep),
      breakOrNot(title.slice(0, sep)),
      title.slice(sep),
    ];
  };

  switch (words.length) {
    case 1:
      return title;

    default:
      return splitHalf(title);
  }
};
