interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Mercy',
    lastName: 'ofet',
    age: 23,
    location: 'lagos',
}

const student2: Student = {
    firstName: 'Oracle',
    lastName: 'Dam',
    age: 45,
    location: 'Onitsha',
}

const studentList: Student[] = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.style.border = '2px solid green';
table.style.borderRadius = '10px';
table.style.boxSizing = 'border-box';
table.style.padding = '0';
table.style.margin = '0';

table.appendChild(tbody);

studentList.map((student) => {
    
    const row = document.createElement('tr');
    const firstName = document.createElement('td');
    const location = document.createElement('td');
    
    firstName.style.borderBottom = '1px solid grey';
    firstName.style.padding = '10px';
    firstName.style.borderEndStartRadius = '10px';
    location.style.borderBottom = '1px solid grey';
    location.style.padding = '10px';
    location.style.borderEndEndRadius = '10px';

    firstName.innerHTML = student.firstName;
    location.innerHTML = student.location;

    row.appendChild(firstName);
    row.appendChild(location);
    tbody.appendChild(row);
})

document.body.appendChild(table);
