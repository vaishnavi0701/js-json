const fs = require("fs");
var readline = require("readline-sync");
function password(pas) {
    a = /[0-9]/, upper = /[A-Z]/, lower = /[a-z]/, char = /[!@#$%^&*]/
    if (a.test(pas) && upper.test(pas) && lower.test(pas) && char.test(pas)) {
        return true
    }
    else {
        return false
    }
}
function fileExist(fileName) {
    const path = "/home/priyanka/Desktop/LOG_SIGN_UP_PAGE_JS/" + fileName
    var exist = fs.existsSync(path)
    return exist
}
function readAfile(fileName) {
    var data = fs.readFileSync(fileName);
    converted_data = JSON.parse(data);
    return converted_data;
}
function writeINFIle(fileName, data) {
    fs.writeFileSync(fileName, data);
}
function checkId(id) {
    var data = readAfile('data.json');
    for (i of converted_data) {
        // console.log(i);
        if (i["username"] === id) {
            return true
        }
    }
    return false
}
function checkPwd() {
    var data = readAfile("data.json")
    for (i of converted_data) {
        if (i["password"] === pwd_1) {
            return true
        }
    } return false
}
const Option = readline.question("enter the option , 1 for log in and 2 is for sign up")
if (Option === "1") {
    signUp()
}
else {
    login()
}
function signUp() {
    var username = readline.question("enter username");
    var pwd = readline.question("enter password");
    var fileexist = fileExist("data.json");
    if (fileexist == true) {
        var readingData = readAfile('data.json')
        if (checkId(username) === true) {
            console.log("already exist hain wo naam dusra naam chunle");
            signUp()
        } else {
            var checkingPwd = password(pwd)
            if (checkingPwd === true) {
                var hobiies = readline.question("enter hobbies");
                var gender = readline.question("enter the gender")
                readingData.push({ username: username, password: pwd, gender: gender, hobbies: hobiies })
                // console.log(readingData)
                writeINFIle('data.json', JSON.stringify(readingData, null, 3))
            }
            else {
                console.log("please enter the strong password");
                signUp();
            }

        }

    }
    else {
        empty = []
        // readingData = readAfile(data.json)
        a = writeINFIle("data.json", JSON.stringify(empty, readingData))
    }
}
function login() {
    user = readline.question("enter the name")
    pwd_1 = readline.question("enter the password")
    readFile = readAfile("data.json")
    file_exist = fileExist("data.json")
    if (file_exist === true) {
        if (checkId(user) === true) {
            check_pwd = checkPwd(pwd_1)
            if (check_pwd === true) {
                console.log("log in succesfully");
            } else {
                console.log("please enter the correct password");
            }
        } else {
            console.log("you can not log in beacause you don't have registred");
            // signUp()
        }
    } else {
        console.log("file is not exsit please creat your account");
        signUp()
    }
}