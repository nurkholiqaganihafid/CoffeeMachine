class ValidationError extends Error {
    constructor(message) {
        super(message)
        this.name = "ValidationError"
    }
}

// let json = '{"name": "Nurkholiq Agani Hafid", "age": 23}'
// let json = "{bad json}"
let json = '{"age": 20}'

try {
    let user = JSON.parse(json)

    if (!user.name) {
        throw new ValidationError("'name' is required.")
    }

    if (!user.age) {
        throw new ValidationError("'age' is required.")
    }

    // errorCode;

    console.log(user.name);
    console.log(user.age);

} catch (error) {
    // console.log(error.name);

    if (error instanceof SyntaxError) {
        console.log(`JSON error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}