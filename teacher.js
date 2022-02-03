const person = require('./person')

class Teacher extends person.Person {
    constructor(name, age, gender, interests, subject) {
        super(name, age, gender, interests);
        this.subject = subject;
    }
}

exports.Teacher = Teacher;