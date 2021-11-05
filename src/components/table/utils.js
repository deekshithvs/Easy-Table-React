import { CONSTANTS } from "./constants";
export const isGreater = (value1, value2, type) => {
  if (type === "string") {
    if (value1.toLowerCase() < value2.toLowerCase()) {
      return -1;
    } else return 1;
  } else if (type === "number") {
    return value1 - value2;
  } else if(type === "date") {
      return (new Date(value1) - new Date(value2));
  } else {
    return 1;
  }
};

export const sortUtil = (data, sortColumn, sortOrder) => {
 const { id, type } = sortColumn; 
  
  const newData = [...data];
  newData.sort((item1, item2) => {
    const value1 = item1[id];
    const value2 = item2[id];

    switch (sortOrder) {
      case CONSTANTS.sortOrder.ASCENDING: {
        return isGreater(value1, value2, type);
      }

      case CONSTANTS.sortOrder.DESCENDING: {
        return -1 * isGreater(value1, value2, type);
      }
      default:
        return 1;
    }
  });
  return newData;
};
