// 4번 문제.

let user = {
  name: "지환",
  years: 24,
};

const{name, years}=user;
const{name:Name, years:age,isAdmin=false}=user;


alert(Name); // "지환"
alert(age); // 24
alert(isAdmin); // false
