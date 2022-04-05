/**
 * Submit Handler for form
 */
const submitHandler = (e) => {
    console.log(e)
    e.preventDefault();
}
const handleInput = (e) => {
    const error = document.querySelector(".input-email-error");
    const inputContainer = document.querySelector(".input-container");
    error.style.visibility = "hidden";
    if(inputContainer.classList.contains("error-border")) {
        inputContainer.classList.remove("error-border")
    }
    console.log(e);
}
const handleError = (e) => {
    const error = document.querySelector(".input-email-error");
    const inputContainer = document.querySelector(".input-container");
    error.style.visibility = "visible"
    inputContainer.classList.add("error-border");

}
const input = document.querySelector(".input-email");
const form = document.querySelector(".form");
form.addEventListener("submit", submitHandler)
input.addEventListener("input", handleInput)
input.addEventListener("invalid", handleError)