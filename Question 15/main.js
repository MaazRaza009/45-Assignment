var guests = ["Arif", "Fahad", "Hassan"];
var unabletoAttend = "Fahad";
console.log("".concat(unabletoAttend, " not join with me for dinner."));
var Newguests = "Abid";
guests[guests.indexOf(unabletoAttend)] = Newguests;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner"));
});
