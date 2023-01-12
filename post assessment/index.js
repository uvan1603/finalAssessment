const csv = require("csv-parser");
const fs = require("fs");
//Here I've created a array for storing the information of students.
const arrStud = [];

fs.createReadStream("./data.csv")
  .pipe(csv())
  .on("data", (data) => arrStud.push(data))
  .on("end", () => {
    //Here I'm sorting the arrStud by age in ascending order.
    arrStud.sort(function (a, b) {
      return a.Age - b.Age;
    });
    //Printing the array that has all the students info.
    console.log(arrStud);
    //Here I'm finding the average of grades of students. 
        const sum = arrStud.reduce((acc, curr) => acc + Number(curr.Grade), 0);
        const avg = sum / arrStud.length;
        //Printing the average of grades of students
        console.log("Average mark of all students :",avg);
      }) / arrStud.length;
;
