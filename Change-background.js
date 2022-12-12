const button = document.querySelector("button");

const changeBackground = () => {
    // Generate a random 6 character hexadecimal color value
    const hexVal = Math.floor(Math.random() * 0xffffff).toString(16);
    // Set the background color of the page to the generated color
    document.body.style.background = `#${hexVal}`;
}

// Call the changeBackground function on button click
button.addEventListener("click", changeBackground);

// Get a reference to the button
var btn = document.getElementById('myButton');

// Set an interval to call the click() method every 5 seconds
setInterval(function() {
  button.click();
}, 5000);
