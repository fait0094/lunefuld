import "./style.css";

const acceptCookie = document.querySelector("#accepter");
const denyCookie = document.querySelector("#afvis");
const cookieboks = document.querySelector("#cookieboks");

acceptCookie.addEventListener("click", fjernCookieBoks);
denyCookie.addEventListener("click", fjernCookieBoks);

if (sessionStorage.getItem(fjernCookieBoks)) {
  cookieboks.classList.add("hidden");
}
