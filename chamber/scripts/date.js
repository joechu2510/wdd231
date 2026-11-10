const currentYear = document.querySelector("#currentyear");
const today = new Date();
currentYear.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#last-modified-date");
lastModified.innerHTML = document.lastModified;