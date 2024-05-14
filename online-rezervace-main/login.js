const database = [
    "pepik.ahoj777",
    "janička.pizza88",
    "karlíček.kočka333",
    "evánka.1234567",
 
   
]
 
 
 
 
 
function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
 
    const loginData = username + "." + password
 
    for(let i = 0; i < database.length; i++){
       
        if(loginData == database [i]) {
            document.getElementById("output").innerHTML = "login successful"
            console.log("login successful");
            window.location.href = 'http://127.0.0.1:5500/index.html';
            document.getElementById("outputSite").innerHTML = loginData
            break
        } else if (i == database.length - 1){
            document.getElementById("output").innerHTML = "login failed"
            console.log("login failed")
        }
    }
}