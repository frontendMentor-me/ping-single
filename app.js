document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    let errorText = document.querySelector(".errorText")
    let inputEmail = document.querySelector(".inputEmail")
    const data = Object.fromEntries(
        new FormData(e.target)
    )

    if (data.email.includes("@")) {
        if (data.email.includes("/") || !data.email.includes(".")) {
            inputEmail.classList.add("error")
        } else {
            inputEmail.classList.remove("error")
        }
        errorText.innerHTML = (data.email.includes("/") || !data.email.includes(".")) ? "Please provide a valid email address" : "";
        (data.email.includes("/") || !data.email.includes(".")) ? inputEmail.classList.add("error") : inputEmail.classList.remove("error")

    } else {
        errorText.innerHTML = "Please provide a valid email address"
        inputEmail.classList.add("error")

    }

})