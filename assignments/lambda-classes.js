// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }

}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }

    changeGrade(student) {
        let points = Math.round(Math.random() * 100);
        if (student.grade >= 100) {
            student.grade -= points;
            console.log(`${student.name}'s current grade is ${student.grade}`);
        } else {
            student.grade += points;
            console.log(`${student.name}'s current grade is ${student.grade}`);
        }
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        this.grade = studentAttr.grade;
    }

    listsSubjects() {
        console.log(JSON.stringify(`${this.favSubjects}`));
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel Stand Up Time!`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const eric = new Student({
    name: 'Eric',
    location: 'Stillwater',
    age: 37,
    previousBackground: 'Retail Management',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 100,
});

const bill = new Student({
    name: 'Bill',
    location: 'Stillwater',
    age: 45,
    previousBackground: 'CS Degree',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 69,
});

const sarah = new Student({
    name: 'Sarah',
    location: 'Stillwater',
    age: 23,
    previousBackground: 'College Dropout',
    className: 'Web21',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 95,
});

const tom = new ProjectManager({
    name: 'Tom',
    location: 'Boston',
    age: 29,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});
console.log(eric.previousBackground);
eric.speak();
fred.demo('Javascript');
fred.grade(eric, 'CSS')
eric.listsSubjects();
eric.PRAssignment('Javascript');
eric.sprintChallenge('HTML');
tom.standUp('Web21');
tom.debugsCode(eric, 'Javascript');
fred.changeGrade(bill);
tom.changeGrade(sarah);
