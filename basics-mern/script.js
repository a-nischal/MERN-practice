// // const students = [
// //     { name: 'Alice', score: 85 },
// //     { name: 'Bob', score: 92 },
// //     { name: 'Charlie', score: 48 },
// //     { name: 'David', score: 74 },
// //     { name: 'Eve', score: 68 }
// //   ];
 
// //   const studentname = students.map(student => student.name)
// //   console.log(studentname);

//  let n = [1,2,3,4,5];
// //  let sum = 0;
// // for(i=0;i<n.length; i++){
// //     sum = sum + n[i];
// // }
// // console.log(sum);

// // for(let number of n ){
// //     sum += number;
// // }
// // console.log(sum);
// // let sum = n.reduce((accumulator , currentValue) => accumulator + currentValue , 0);
// // console.log(sum);
// // let evens = [];
// // for (i=0 ; i<n.length ; i ++){

// //     if(n[i]%2 === 0){
// //         evens.push(n[i]);
// //     }
// // }
// // console.log(evens);
// // for (ns of n){
// //     if (ns % 2 ===0){
// //         evens.push(ns);
// //     }
// // }
// // console.log(evens);
// // let evens = n.filter(ns => ns % 2 === 0 );
// // console.log(evens);
// // let double = [];
// // for (ns of n){
// // double.push(ns * 2);

// // }
// // console.log(double);
// // let double = n.map(number => number *2);
// // console.log(double);

// //   console.log(`Name: ${student.name}`);
// //   console.log(`Age: ${student.age}`);
// //   console.log(`Courses: ${student.courses}`);
// //   console.log(`Grades: ${student.grades.Geography}`);

// if (student.age<20) {
//         console.log(`${student.name} is below 20 years old `)
    
//     }
//     else {
//             console.log(`${student.name} is 20 years old or older`)
//         }
//         mathgrade = student.grades.Math;
//         switch (true) {
//                 case (mathgrade<=100 && mathgrade>=90):
//                     console.log('Excellent')
//                     break;
//                     case (mathgrade<90 && mathgrade>=80):
//                         console.log('Good')
//                         break;
//                         case (mathgrade<=80 && mathgrade>=70):
//                             console.log('Average')
//                             break;
//                             case (mathgrade<70 && mathgrade>=0):
//                                 console.log('Needs Improvement')
//                                 break;
//                                 default:
//                                 console.log('Invalid Marks')
//                                 break;
//             }
            
//             const a = 1;
            
//             switch(a){
//                     case 1:
//                         console.log('first');
//                         break;
//                     case 2:
//                         console.log('second');
//                         break;
//                 }
                
//                 console.log('Courses:')
//                 for(let course of ['math', 'sciened', 'history']){ // student.courses
//                     console.log(course);
//                 }
                
//                 const numbers = [1,4343,3434,3434]
                
//                 for(let num of numbers){
//                         console.log(num)
//                     }
                    
//                     const person = {
//                             name: 'basanta',
//                             age: 10
//                         }
                        
//                         for(const key in person){
//                                 console.log(`${key}: ${person[key]}`)
//                                 // console.log(person[key]) // person.name, person["name"]
//                             }
//                             const student = {
//                                 name: 'John Doe',
//                                 age: 21,
//                                 courses: ['Math', 'Science', 'History'],
//                                 grades: {
//                                     'Math': 50,
//                                     'Science': 90,
//                                     'History': 78
//                                 }
//                             };
//                             let newCourse = 'Geography';
//                             student.courses.push(newCourse);
//                             student.grades[newCourse] = 85;
//                             student.averagegrade = function(){
//                             let totalgrades = 0;
//                             let numberofcourses=0;
//                             for (const grade in student.grades){
//                                 totalgrades += student.grades[grade]
//                                 numberofcourses++;
//                                 // console.log(student.grades[grade]);
//                             }
//                             return(totalgrades/numberofcourses);
//                         }

//                         // console.log(student.averagegrade());
//                         var dynamicProperty = 'year';
//                         student[dynamicProperty] = 2024;
//                         student.addCourse = function(course,grade){
//                             this.courses.push(physics);
//                             this.courses.course[grade] = 50


//                         }
//                         console.log(student.courses)

// function User(animalname,animal){
//     this.animalname = animalname;
//     this.animal= animal;
//  greet(){

//     }

// }


// const cat = new User('doggy','dog');
// const dog = new User('neko',5);
// // console.log(dog);



// class CustomError extends Error{
//     constructor(message){

//     }
// }

// try{
//     const age = 10;
//     if (age<18){
//         throw new CustomError("Your age must be 18");
//     }
//     else{
//         console.log('You can enter');
//     }
// }catch(error){
//     if (error instanceof CustomError){
//         console.log(error.message);
//     }else{
//         console.log('This should be logged somewhere', error)
//     }

// }
async function getGithubUserDataByUserName(){
    const res = await fetch("https://api.github.com/users/Basanta-Kc");
    const data =await res.json()
    const followersRes = await fetch(data.followers_url)
    const floowersData = await followersRes.json()
  }

  getGithubUserDataByUserName()