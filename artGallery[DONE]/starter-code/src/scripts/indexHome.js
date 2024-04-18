const openLocation = () => {
    const button = document.querySelector("#btn-location");

    button.addEventListener("click", () => {
        location.replace("./location.html")
    })
}

openLocation()