function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("\"".concat(city, "\" is the capital of \"").concat(country, "\"."));
}
describe_city("Isslamabad");
describe_city("Canberra", "Australia");
describe_city("Ottawa", "Canada");
