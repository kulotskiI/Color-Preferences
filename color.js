let favColor = [];

function addColor() {
    let color = prompt("Enter a color you like:");
    if (color) {
        favColor.push(color);
        console.log("Updated favorite colors: ", favColor);
    } else {
        console.log("No color entered.");
    }
}

for (let i = 0; i < 3; i++) {
    addColor();
}