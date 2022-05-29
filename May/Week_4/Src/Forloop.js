console.log("Loop to print all odd number under 30 with if condition : ");
for (let i = 0; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("\n \n Loop to print all odd number under 30 without if condition : ");
for (let i = 0; i <= 30; i += 2) {
    console.log(i);
}