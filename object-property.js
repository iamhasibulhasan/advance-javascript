const student = [
    {id: 1, name: "Ridu"},
    {id: 2, name: "Dipto"},
    {id: 3, name: "Dola"},
    {id: 4, name: "Tithi"},
    {id: 5, name: "Tania"},
];

//console.log(student[0].id);
let name = [];
for (let i = 0; i < student.length; i++) {
    const element = student[i].name;
    name.push(element);
}
// console.log(name);

// ! Using Map
const names = student.map(n => n.name);
const ids = student.map(n => n.id);
console.log(names);
console.log(ids);
