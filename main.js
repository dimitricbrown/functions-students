const createStudent = () => {
    const studentObj = {
        name: "Gina Lenetti",
        grade: "7th"
    }

    return studentObj
}

const addMathGrade = (studentObj) => {
    studentObj.math = "B"

    return studentObj
}

const addHistoryGrade = (studentObj) => {
    studentObj.history = "C"

    return studentObj
}

const addScienceGrade = (studentObj) => {
    studentObj.science = "A"

    return studentObj
}

let student = createStudent()

addMathGrade(student)
addHistoryGrade(student)
addScienceGrade(student)

console.log(student)
