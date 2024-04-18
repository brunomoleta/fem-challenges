const returnHomePage = () => {
  const button = document.querySelector("#btn-location");

  button.addEventListener("click", () => {
    location.replace("./index.html");
  });
};

returnHomePage();
