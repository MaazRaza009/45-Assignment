function describe_city(city: string, country: string = "Pakistan"){
    console.log(`"${city}" is the capital of "${country}".`)
}
describe_city("Isslamabad");
describe_city("Canberra", "Australia");
describe_city("Ottawa", "Canada");