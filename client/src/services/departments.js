const departmentsApi = `http://localhost:8080/departments`;

export const departnentArray = [
    {name:"חוזים",age:1},
    {name:"נדלן",age:2},
    {name:"הסכמים",age:3},
    {name:"פיננסים",age:4},
    {name:"חברות",age:5},
    {name:"מיסים",age:6},
    {name:"פלילי",age:7},
    {name:"הנהלת חשבונות ",age:8},
    {name:"קריאטיב",age:9},

]
// export const getDepartments = async () => {
//     try {
        // return await fetch(departnentArray)
        //     .then(()=>{console.log(departnentArray);})
        //     .then(res => res.json());
//     } catch (error) {
//         console.error(error);
//     }
// }