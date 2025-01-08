const letters = "0123456789ABCDEF";
export const getRandomColor = () => {
  let color = ["#"];
  let i = 0;
  const finish = 6;
  while (i < finish) {
    color.push(letters[Math.floor(Math.random() * 16)]);
    i++;
  }
  // for (let i = 0; i < 6; i++) {
  //   color += letters[Math.floor(Math.random() * 16)];
  // }
  return color.join("");
};

const availableColors = [
  "bg-red-400",
  "bg-orange-400",
  "bg-lime-400",
  "bg-green-900",
  "bg-cyan-400",
  "bg-sky-600",
  "bg-indigo-600",
  "bg-fuchsia-950",
];

// Function to randomly select a color and ensure it's not repeated until all others are used
export const getRandomTailwindColorClass = () => {
  //set up the array to iterate over
  let randomColorClasses = [].concat(availableColors);

  // Get a random index from the available colors
  const randomIndex = Math.floor(Math.random() * availableColors.length);

  // Select the color at the random index
  const selectedColor = availableColors[randomIndex];

  // Remove the selected color from the list
  randomColorClasses.splice(randomIndex, 1);

  // Return the selected color class
  return selectedColor;
};
