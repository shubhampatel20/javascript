// de- structuring of Objects 

const course = {
    coursename : "learning javascript",
    price : 0,
    courseInstructor : "Shubham"

}
const {courseInstructor} = course
console.log(courseInstructor);

// destructing
const {courseInstructor: instructor} = course
console.log(instructor);
