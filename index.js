import * as Awesomebooks from "./modules/Awsome.js";
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
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);;

  document.querySelector(".date").innerHTML = now;
});
//Awesomebooks.addBook();
