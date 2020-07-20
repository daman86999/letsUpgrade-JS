//q1



document.getElementById("bt1").onclick = function () {
   
for (let i = 0; i<101 ; i++){
    if (i%3==0){
        console.log(`multiple is ${i}. Printing 'fizz' because it is multiple of 3.`);
    }
    if (i%5==0) {
        console.log(`multiple is ${i}. Printing 'buzz' because it is multiple of 5.`);

    }
    if (i%5==0 && i%3==0) {
        console.log(`multiple is ${i}. Printing 'fizzbuzz' because it is  multiple of 3 and 5.`);
    }
}
}


//q2
document.getElementById("bt2").onclick = function () {
const student = {
    name: "Helsinki",
    age: 24,
    projects: {
      diceGame: "Two player dice game using JavaScript",
    },
  };
  
  let {
    name,
    age,
    projects: { diceGame },
  } = student;
  
  // showing the object(key:value)
  console.log({ name, age });
  // showing the values
  console.log(name, age, diceGame);
}

  //q3


  document.getElementById("bt3").onclick = function () {
  shoppingList = ["Apple","Banana","Orange","Grapes"];
  
  console.log("shoppingList:", shoppingList);
  
  shoppingBasket = [
    "Rajma",
    "Chaval",
    "Laung",
    "Elaichi",
    "Lahsun",...shoppingList
  ];
  shoppingBasket.push("Papad");
  
  console.log("shoppingBasket:", shoppingBasket);
  }
  //q5
  document.getElementById("bt5").onclick = function () {
    let sales = prompt("Enter sales : ");
    let comm;
    switch (true) {
      case sales >= 0 && sales < 5001:
        comm = sales * 0.02;
        break;
      case sales >= 5001 && sales < 10001:
        comm = 5000 * 0.02 + (sales - 5000) * 0.05;
        break;
      case sales >= 10001 && sales < 20001:
        comm = 5000 * 0.02 + 5000 * 0.05 + (sales - 10000) * 0.07;
        break;
      case sales >= 20001:
        comm = 5000 * 0.02 + 5000 * 0.05 + 10000 * 0.07 + (sales - 20000) * 0.1;
        break;
    }
    document.getElementById("netcomm").innerHTML =
      "Net Commision Rs.:&nbsp &nbsp" + comm;
  };


  //q6
  document.getElementById("bt6").onclick = function () {
  while (!false) {
    let num = prompt("Enter number less than 101 or it will not end until you press cancel");
    if (num < 101) {
      console.log("Number: " + num);
      break;
    } 
    else {
      console.log("Number: " + num);
      continue;
    }
  }
 
};


//q7

document.getElementById("bt7").onclick = function () {
    let start = Number(prompt("Starting number of the range :"));
    let end = Number(prompt("Ending number of the range:  "));
  
    for (j = start; j <= end; j++) {
      if (j == 1) {
        continue;
      }
      flag = 1;
      for (i = 2; i <= j / 2; ++i) {
        if (j % i == 0) {
          flag = 0;
          break;
        }
      }
      if (flag == 1) {
        console.log(j);
      }
    }
};


//q8

document.getElementById("bt8").onclick = function () {
    
ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };
  
  ask(
    "Do you agree?",
    function () {
      alert("You agreed.");
    },
    function () {
      alert("You canceled the execution.");
    }
  );
  
}