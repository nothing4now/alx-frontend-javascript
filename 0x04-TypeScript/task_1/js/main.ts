interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

// example
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

// example
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

interface printTeacherFunction {
  (firstName: string,
  lastName: string): string
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string ) : string =>
  `${firstName[0]}. ${lastName}`;

console.log(printTeacher("John", "Doe"));

interface StudentClassInterface {
  firstName: string;
  lastname: string;
}

interface StudentClassConstructor {
  new(firstName: string, lastname: string): StudentClassInterface
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastname: string;

  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastname = lastName;
  }

  workOnHomework(): string{
    return "Currently working";
  }

  displayname():string{
    return this.firstName;
  }
}
