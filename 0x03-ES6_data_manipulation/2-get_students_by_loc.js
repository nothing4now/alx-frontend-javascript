const getStudentsByLocation = (arr, city) => {
  const sameCities = arr.filter((item) => item.location === city);
  return sameCities;
};

export default getStudentsByLocation;
