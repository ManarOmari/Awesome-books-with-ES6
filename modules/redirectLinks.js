// Rendering various links
 export const link = document.getElementById("link-a");
 export const addNew = document.getElementById("add-new-a");
 export const contact = document.getElementById("contact-a");

 export const sectionBook = document.querySelector(".book-list-section");
 export const addNewBook = document.getElementById("add-book-form");
 export const sectionContact = document.querySelector(".contact-section");

 link.addEventListener("click", () => {
    addNewBook.style.display = "none";
    sectionContact.style.display = "none";
    sectionBook.style.display = "block";
  });
  
  addNew.addEventListener("click", () => {
    sectionBook.style.display = "none";
    sectionContact.style.display = "none";
    addNewBook.style.display = "flex";
  });
  
  contact.addEventListener("click", () => {
    sectionBook.style.display = "none";
    addNewBook.style.display = "none";
    sectionContact.style.display = "block";
  });