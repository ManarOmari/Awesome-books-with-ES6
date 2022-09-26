import Awesomebooks from "./modules/Awsome.js";
import {
  link,
  addNew,
  contact,
  sectionBook,
  addNewBook,
  sectionContact,
} from "./modules/redirectLinks.js";
import { DateTime } from "./modules/luxon.js";

// Add date
document.addEventListener("DOMContentLoaded", () => {
  const now = DateTime.now();

  document.querySelector(".date").innerHTML = now;
});
//Awesomebooks.addBook();
