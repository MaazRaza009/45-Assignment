let places: string[] = ["Karachi", "Sindh", "Punjab", "Balochistan", "KPK"];

console.log("Original Order:", places);

console.log("Alphabetical order:",  [...places].sort());

console.log("Reversed order:", places.reverse());

console.log("Reverse alphabetical order:", [...places].sort().reverse());