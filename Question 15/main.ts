let guests: string[] = ["Arif", "Fahad", "Hassan"];
let unabletoAttend = "Fahad";
console.log(`${unabletoAttend} not join with me for dinner.`);

let Newguests = "Abid";
guests[guests.indexOf(unabletoAttend)] = Newguests;

guests.forEach(guest =>{
    console.log(`Dear ${guest}, would you like to join me for dinner`);
});