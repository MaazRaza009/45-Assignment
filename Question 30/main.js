var usernames = ["Admin", "Asif", "Abid", "Ali", "Bilal"];
usernames.forEach(function (username) {
    if (username == "Admin") {
        console.log("Hello Admin, how are you");
    }
    else {
        console.log("Hello ".concat(username, ",how are you"));
    }
});
