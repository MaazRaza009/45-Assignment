let guests: string[] = ["Arif", "Abid", "Hassan"];
console.log("Hurrah! I found a bigger dinner table to join more guests for dinner!");

// Adding more and more guests
guests.unshift  ("Asif");
guests.splice(guests.length/3,0, "Khalid");
guests.push("Ahmed");

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});