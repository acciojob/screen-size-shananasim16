function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // Display the width and height
  console.log(Window width: ${width}, Window height: ${height});
}

// Event listener for window resize
window.addEventListener("resize", updateSize);

// Initial call to display the width and height on load
updateSize();