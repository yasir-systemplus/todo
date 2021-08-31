const randomColor = () => {
  const colors = [
    "grey",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];

  let rand = (Math.random() * (7 - 0) + 0).toFixed(0);
  return colors[rand];
};

export default randomColor;
