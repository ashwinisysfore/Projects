// const array1=[1,2,3,7,80];

// const map1= array1.map((elem)=> elem*elem);
// console.log(map1);

// const array1=[1,2,4,65,8,70,83];
// const map1=array1.map((a)=>a*a);
// const filter1=array1.filter((a)=>a<10);
// console.log(array1);
//console.log(reduce1)

const arr = [
    {
      id: 1,
      name: "Alex",
      passed: true,
      cgpa: "9.7",
    },
    {
      id: 2,
      name: "Leena",
      passed: false,
      cgpa: "3.7",
    },
    {
      id: 3,
      name: "Aaron",
      passed: true,
      cgpa: "8.9",
    },
    {
      id: 4,
      name: "Naman",
      passed: true,
      cgpa: "9",
    },
    {
      id: 5,
      name: "Ravi",
      passed: false,
      cgpa: "2.8",
    },
  ];

  const newMap=arr.map((data) => console.log(data.name));

  const newFilter=arr.filter((data)=>data.passed===true);
  console.log(newFilter);