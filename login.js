var fs = require('fs');
console.log("** WELOCOMEto Log in and sign up page *")
let readlineSync = require("readline-sync");
user = readlineSync.question("Do you want to Login or sign up :-")
if (user == "sign up") {
    let readlineSync = require("readline-sync");
    user_name = readlineSync.question("enter the user name :-")
    let password1 = readlineSync.question("enter the password :-")
    if (password1.length >= 8 && password1.length <= 15) {
        password2 = readlineSync.question("enter the confirm password :-")
        if (password1[0].toUpperCase() == password1[0]) {
            if (password1 == password2) {
                if (password1.includes('1') || password1.includes('2') || password1.includes('3') || password1.includes('4') || password1.includes('5') || password1.includes('6') || password1.includes('7') || password1.includes('8') || password1.includes('9') || password1.includes('0'))
                    if (password1.includes("@") || password1.includes("#")) {
                        if (password1 == password2) {
                            let readlineSync = require("readline-sync");
                            var description = readlineSync.question("enter the description :- ")
                            var Birth_date = readlineSync.question("enter the birth date :-")
                            var Hobbies = readlineSync.question("enter the Hobbies :-")
                            var Gender = readlineSync.question("enter the gender :-")
                            console.log("congrates", user_name, "your are signed up successfully")
                            var user_details = { user: { "username": user_name, "password": password1 }, "profilo": { "description": description, "birth_date": Birth_date, "Hobbies": Hobbies, "Gender": Gender } }
                            let file = JSON.stringify(user_details)
                            fs.writeFileSync("user_details.txt ", file)
                        } else {
                            console.log("Both  password are not same")
                        }

                    } else {
                        console.log("At least password should be contain one special charcter ")
                    }
                else {
                    console.log('At least password should be contain one special charcter')
                }
            } else {
                console.log("Sign up is not succesfully")
            }
        } else {
            console.log("Password should be contain first  alphabet is capital")
        }
    } else {
        console.log('At least password should be contain 15 charecter')
    }
} else if (user == "Log in") {
    let readlineSync = require("readline-sync");
    user_name1 = readlineSync.question("enter the user name :-")
    password3 = readlineSync.question("enter the password :-")
    var read = fs.readFileSync("user_details.txt ");
    data1 = JSON.parse(read)
    user_1 = data1['user']
    if (data1['user']['username'] == user_name1) {
        if (data1['user']['password'] == password3) {
            console.log('congrates ', user_name1, 'your are Login successfully ')
            console.log('Information ->')
            console.log('description', "->", data1['profilo']['description'])
            console.log('DOB', '->', data1['profilo']['birth_date'])
            console.log('Hobbies', '->', data1['profilo']['Hobbies'])
            console.log('Gender ', '->', data1['profilo']['Gender'])
        } else {
            console.log("your password is not equal")
        }
    } else {
        console.log('your user_name is not correct')
    }
} else {
    console.log("It is not valid")
}



