import { CONSTANTS } from "./constants";
export const isGreater = (value1, value2) => {
  if (typeof value1 === "string") {
    if (value1.toLowerCase() < value2.toLowerCase()) {
      return -1;
    } else return 1;
  } else if (typeof value1 === "number") {
    if (value1 > value2) {
      return 1;
    } else {
      return -1;
    }
  } else {
    return 1;
  }
};

export const sortUtil = (data, sortColumn, sortOrder) => {
  const newData = [...data];
  newData.sort((item1, item2) => {
    const value1 = item1[sortColumn];
    const value2 = item2[sortColumn];

    switch (sortOrder) {
      case CONSTANTS.sortOrder.ASCENDING: {
        return isGreater(value1, value2);
      }

      case CONSTANTS.sortOrder.DESCENDING: {
        return -1 * isGreater(value1, value2);
      }
      default:
        return 1;
    }
  });
  return newData;
};
