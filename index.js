const FREELANCERS = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];






//call the main function


function main() {
    const root = document.getElementById("root");
    const h1 = document.createElement("h1");
    h1.innerHTML = "FREELANCERS";
    root.appendChild(h1);
//function name to an order list
 
    for (let i = 0; i < FREELANCERS.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${FREELANCERS[i].name}, ${FREELANCERS[i].age}, ${FREELANCERS[i].occupation}` ;
        root.appendChild(li);
    }
  }
  
  main()
  
//Maps works
    // const cb = (user) => {
    //     const li = document.createElement("li");
    //     li.innerHTML = `${user.name} ${user.age} ${user.occupation}` ;
    //     root.appendChild(li);
    //     return users;
    // }
    // const fulllist = users.map(cb);