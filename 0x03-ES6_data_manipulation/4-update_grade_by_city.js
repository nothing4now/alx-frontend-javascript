const updateStudentGradeByCity = (arr, city, newGrades) => {
  const studentOfSameCities = arr.filter((item) => item.location === city);
  for (const student of studentOfSameCities) {
    student.grade = 'N/A';
  }

  const gradeOfStudent = studentOfSameCities.map((studentOfSameCities) => {
    const oneStudent = studentOfSameCities;
    for (const grade of newGrades) {
      if (oneStudent.id === grade.studentId) {
        oneStudent.grade = grade.grade;
      }
    }
    return oneStudent;
  });
  return gradeOfStudent;
};

export default updateStudentGradeByCity;
