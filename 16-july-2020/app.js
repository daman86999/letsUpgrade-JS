//q1


let a = prompt("Enter a number ... ")

var ans = function(a){
    if(a%2==0){
        console.log(`The number entered is ${a} and number is even`)
    }
    else{
        console.log(`The number entered is ${a} and number is odd`)
    }
}

ans(a)

//q2

//q3
let marks = prompt("Enter marks .. : ")


if(marks>=90){
    console.log("Grade : A")
}
else if(marks<90 && marks>=50){
    console.log("Grade : B")
}
else{
    console.log("Grade : C")
}


//ternary

let grade = (marks>=90) ? 'Grade : A':
            (marks<90 && marks>=50) ? 'Grade : B':