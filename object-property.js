const student=[
       { id:17,name:'akib'},
       { id:71,name:'sakib'},
       { id:12,name:'nabil'},
];
// const allName=[];
// for(let i=0;i<student.length;i++){
//  element=student[i];
//  nam=element.name;
// allName.push(nam);
// }
// console.log(allName);

const ids=student.map(s=> s.id);
console.log(ids);
const bigger=student.filter(s=> s.id>50);
console.log(bigger);
const one=student.find(s=> s.id>50);
console.log(one);











