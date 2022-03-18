func({ color: "red", width: 400, height: 500 });
function func({ color = "black", width, height }) {
  console.log(color);
  console.log(width);
  console.log(height);
}
