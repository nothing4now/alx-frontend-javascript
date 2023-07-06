const getStudentIdsSum = (arr) => {
//   const initial = 0;
//   const sumsOfId = arr.reduce((accumulator, current) => accumulator + current.id, initial);
  const sumsOfId = arr.reduce((summation, currentValue) => summation + currentValue.id, 0);
  return sumsOfId;
};

export default getStudentIdsSum;
