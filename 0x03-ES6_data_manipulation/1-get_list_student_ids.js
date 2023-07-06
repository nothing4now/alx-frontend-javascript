const getListStudentIds = (arr) => {
  if (Array.isArray(arr)) {
    const newArr = arr.map((item) => item.id);
    // const newArr = arr.map(({ id }) => id);
    return newArr;
  }
  return [];
};

export default getListStudentIds;
