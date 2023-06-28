const converter = () => {
  const inputValue = document.getElementById("input").value;
  const selectedTempop = document.getElementById("temp_option");
  const selectedOption =
    temp_option.options[selectedTempop.selectedIndex].value;
  // console.log(selectedOption);
  // console.log(inputValue);

  const celtofah = (Cel) => {
    let fahrenheit = Math.round(Cel * 1.8 + 32);
    return fahrenheit;
  };
  const fehtocel = (Fah) => {
    let celsius = Math.round((Fah - 32) * (5 / 9));
    return celsius;
  };

  let result;

  if (selectedOption == "Cel") {
    result = celtofah(inputValue);
    document.getElementById("ans").innerHTML = `${result} Fahrenheit`;
  } else {
    result = fehtocel(inputValue);
    document.getElementById("ans").innerHTML = `${result}Celsius`;
  }
};
