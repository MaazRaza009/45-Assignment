var my_users = ["Admin", "my1", "my3", "my5"];
var your_users = ["my2", "my4", "Admin", "my6", "User8"];
your_users.forEach(function (yourUser) {
    if (my_users.some(function (myUser) { return myUser.toLowerCase() === yourUser.toLowerCase(); })) {
        console.log("".concat(yourUser, " is not available."));
    }
    else {
        console.log("".concat(yourUser, " is available."));
    }
});
