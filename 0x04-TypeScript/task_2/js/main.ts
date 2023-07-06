interface DirectorInterface {
    workFromHome(): string;
    getToWork(): string;
    workDirectorTasks(): string;
}
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {

    workFromHome(): string{
        return "working from home";
    }

    getToWork():string{
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {

    workFromHome(): string{
        return "Cannot work from home";
    }

    getCoffeeBreak():string{
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: number | string): Director| Teacher => {
    return typeof salary === 'number' && salary < 500? new Teacher : new Director;
}
                                                      
const isDirector = (employee: Teacher | Director) => employee instanceof Director;
const executeWork = (employee: Teacher |Director): string => {
    let result;
    isDirector(employee)? result = (employee as Director).workDirectorTasks(): result = (employee as Teacher).workTeacherTasks();
    return result;
}

type Subjects= 'Math' | 'History'
const teachClass = (todayClass: Subjects) => todayClass === 'Math'? 'Teaching Math' : 'Teaching History';
console.log(teachClass('History'))
