const contactForm = document.getElementById("contactForm");

if (contactForm) {
contactForm.addEventListener("submit", function (event) {
event.preventDefault();

const name = document.getElementById("contactName").value.trim();
const email = document.getElementById("contactEmail").value.trim();
const message = document.getElementById("contactMessage").value.trim();

const formFeedback = document.getElementById("formFeedback");
const formPreview = document.getElementById("formPreview");

// Check that no field is empty.
if (name === "" || email === "" || message === "") {
formFeedback.textContent = "Please fill in all fields.";
formPreview.hidden = true;
return;
}

// Check the email format.
const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

if (!emailPattern.test(email)) {
formFeedback.textContent = "Please enter a valid email address.";
formPreview.hidden = true;
return;
}

// Display the validated message preview.
document.getElementById("previewName").textContent = name;
document.getElementById("previewEmail").textContent = email;
document.getElementById("previewMessage").textContent = message;

formFeedback.textContent = "Your details have been validated successfully.";
formPreview.hidden = false;
});
}
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
themeToggle.addEventListener("click", function () {
document.body.classList.toggle("dark-theme");

const darkMode = document.body.classList.contains("dark-theme");

themeToggle.textContent = darkMode
? "Switch to light theme"
: "Switch to dark theme";

themeToggle.setAttribute("aria-pressed", darkMode);
});
}
const galleryItems =
document.querySelectorAll(".gallery-item");
const previousPhoto =
document.getElementById("previousPhoto");
const nextPhoto =
document.getElementById("nextPhoto");
const galleryStatus =
document.getElementById("galleryStatus");
if (
galleryItems.length > 0 &&
previousPhoto &&
nextPhoto &&
galleryStatus
) {
let currentPhoto = 0;
function showPhoto(index) {
currentPhoto = index;
galleryItems.forEach(function (photo, i) {
photo.hidden = i !== currentPhoto;
});
galleryStatus.textContent =
"Photo " + (currentPhoto + 1) + " of " +
galleryItems.length;
previousPhoto.disabled = currentPhoto === 0;
nextPhoto.disabled = currentPhoto ===
galleryItems.length - 1;
}
previousPhoto.addEventListener("click", function
() {
if (currentPhoto > 0) {
showPhoto(currentPhoto - 1);
}
});
nextPhoto.addEventListener("click", function () {
if (currentPhoto < galleryItems.length - 1) {
showPhoto(currentPhoto + 1);
}
});
showPhoto(0);
}
const projectSearch =
document.getElementById("projectSearch");
const resetSearch =
document.getElementById("resetSearch");
const searchMessage =
document.getElementById("searchMessage");
const projectItems =
document.querySelectorAll(".project-item");
if (projectSearch && resetSearch &&
searchMessage) {
function filterProjects() {
const searchTerm =
projectSearch.value.toLowerCase().trim();
let visibleCount = 0;
projectItems.forEach(function (item) {
const itemText =
item.textContent.toLowerCase();
const matches = itemText.includes(searchTerm);
item.hidden = !matches;
if (matches) {
visibleCount++;
}
});
if (visibleCount === 0) {
searchMessage.textcontent = "No matchingwork found.";
} else {
searchMessage.textContent =
visibleCount + " item(s) found.";
}
}
projectSearch.addEventListener("input",
filterProjects);
resetSearch.addEventListener("click", function ()
{
projectSearch.value = "";
filterProjects();
projectSearch.focus();
});
filterProjects();
}