//q1



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


//q2

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


  //q3



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


  //q5
  document.getElementById("btx").onclick = function () {
    let sales = document.getElementById("salesid").value;
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
  }


  //q6
  document.getElementById("btg").onclick = function () {
  while (!false) {
    let num = document.getElementById("nb");
    if (num < 101) {
      console.log("Number: " + num);
      break;
    } 
    else {
      console.log("Number: " + num);
      continue;
    }
  }
 
}
