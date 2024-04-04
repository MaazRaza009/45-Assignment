function make_car(manufacturer: string, model: string, ...options: [string, any][]): Object {
    let car = { manufacturer, model };
    options.forEach(([colors,value]) => car[colors] = value);
    return car;
}

console.log(make_car("Toyota", "Camry", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
