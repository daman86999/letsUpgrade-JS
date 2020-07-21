//q1 

document.getElementById("bt1").onclick = function () {
     var num = prompt("Enter a positive number ..");
     var a = [];
     
     for(var i=0  ; i <=num ; i++){
         a.push(i);
     } 

     let odd = a.filter(element=>element%2!=0);
     let cube = odd.map(element=>element**3)

     console.log(`The odd numbers in array are : ${odd}`);
     console.log(`Cube of odd numbers are : ${cube}`);
}

//q2

document.getElementById("bt2").onclick = function (){
                
            class User {
                constructor (name,age,email){
                    this.name = name;
                    this.age = age;
                    this.email = email;
                    this.upcoins = 0;
                    this.courses = [];
                }

                login(){
                    console.log(`${this.name} has logged in`);
                    return this;
                }
                logout(){
                    console.log(`${this.name} has logged out`);
                    return this;
                }

                addcoins(){
                this.upcoins ++;
                console.log(`${this.name} has ${this.upcoins} coins`);
                return this;
                
                }}

            class Moderator extends User{
            addCoin(use,coin){
                
                while(coin--){
                use.upcoins ++ ;
                }
                console.log(use);
                    }
                }
                


            class Admin extends Moderator {
                addCourse(use,course){
                    use.courses.push(course);
                    console.log(use);
                }
            }


            let user1= new User('Daman',20,'Daman@gmail.com')
            user1.login().addcoins().addcoins()

            let user2= new User('Raj',22,'raj@kergr.com')
            user2.login().addcoins().addcoins().addcoins().addcoins()

            let admin = new Admin('Riyaz',40,'riyaz@facebook.com')

            let mod = new Moderator('Loyd',36,'Loyd@hotmail.com')

            let users = [user1,user2,mod,admin]

            users.forEach(element => {
            console.log(element);
            })

            admin.addCourse(user1,'javaScript')
            admin.addCourse(user1,'c++')

            mod.addCoin(user1,5)
}

//q3
document.getElementById("bt3").onclick = function () {
     
        function fetchTodo(){
            fetch("https://jsonplaceholder.typicode.com/todos").then(response=>{console.log(response)
            return response.json()})
            .then(data=>{
                console.log(data);
                for(let i=0;i<data.length;i++){
                    if(data[i].completed==true){
                        console.log(data[i]);
                    }
                }
                })
            .catch(error=>console.log(error))

        }
        fetchTodo();
}