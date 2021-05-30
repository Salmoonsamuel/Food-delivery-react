class Student {
    constructor(name, email, community){
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []){
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student){
        if(this.students.includes(student)) {
            console.log(`This student ${student.email} is already registered`);
        }else{
            this.students.push(student);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name} ${this.level}`);
        }
        return this.students;
    }
}