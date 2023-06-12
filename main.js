 // Using Map

let circles = [10, 30, 50];

let value = circles.map(function (e) {
    pi = 3.14
    // ans = Math.floor(pi * (e ** 2))
    return Math.floor(pi * (e ** 2))
})
document.write(`Area of a circle(Round of value): ${value} `)