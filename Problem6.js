// 6번 문제

const arr = [{ part: "fe", name: "홍현", age: 26},
  { part: "fe", name: "애리", age: 24},
  { part: "fe", name: "나연", age: 23},
  { part: "staff", name: "나현", age: 24}];
console.log(arr);

const filtered = arr.filter((member)=> member.part !== 'staff');
console.log(filtered);

const order = filtered.sort(function(a,b){ return b.age - a.age; });
console.log(order);

const large = order.map((member)=>({...member,part:member.part.toUpperCase()}));
console.log(large);