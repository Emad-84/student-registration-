class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students =[]) {
        this.name = name;
        this.level = level;
        this.students = students;
        }
        registerStudent(student) {
            if(this.students.filter(item => item.email === student.email).length) {
                console.log(`This student ${student.email} is already rigistered`)
            } else {
              this.students.push(student);
               console.log(`registring ${student.email} to the bootcamp web Dev Fundamentals`) 
            }
            return this.students;
        }
    }
