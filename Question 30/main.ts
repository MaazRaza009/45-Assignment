let usernames: string[] = ["Admin", "Asif", "Abid", "Ali", "Bilal"]

usernames.forEach(username => {
    if(username == "Admin"){
        console.log("Hello Admin, how are you")
    }
    else{
        console.log(`Hello ${username},how are you`)
    }
});