let my_users: string[] = ["Admin", "my1", "my3", "my5"];
let your_users: string[] = ["my2", "my4", "Admin", "my6", "User8"];

your_users.forEach(yourUser => {
    if (my_users.some(myUser => myUser.toLowerCase() === yourUser.toLowerCase())) {
        console.log(`${yourUser} is not available.`);
    } else {
        console.log(`${yourUser} is available.`);
    }
});