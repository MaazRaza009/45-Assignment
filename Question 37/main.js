function make_shirt(size, message) {
    if (size === void 0) { size = "medium"; }
    if (message === void 0) { message = "I love python"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("small", "100 days of Coding Challenge");
make_shirt();
make_shirt("large");
