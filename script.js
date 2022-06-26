function main (a = 2, b = 3, c) {
    let result = sum(a, b);

    if(typeof c === "function") {
        return c(result);
    } else {
        return result;
    }
}

function sum (a, b) { 
    return a + b;
}

function count(x) {
    return x += 5;
}

main(2, 3, count);