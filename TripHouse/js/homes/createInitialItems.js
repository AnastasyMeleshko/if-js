import { bubbleSort } from "./bubbleSort.js";
import { createHomesItem } from "./createHomesItem.js";
import { insertHomesItem } from "./insertHomesItem.js";

function createInitialItems() {
  let initialHomesObj;
  if (((sessionStorage.getItem("homesInitialData")) === "undefined") || (sessionStorage.length === 0)) {
    fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
      .then((response) => response.json())
      .then((data) => {
        const dataFinal = data;
        bubbleSort(dataFinal, 'name');
        initialHomesObj = JSON.stringify(dataFinal);
        sessionStorage.setItem("homesInitialData", initialHomesObj);
        for (let i = 0; i < dataFinal.length; i++) {
          const homesItemCreated = createHomesItem(dataFinal, i);
          homesItemCreated.classList.add("initial-homes-item");
          insertHomesItem(homesItemCreated);
        }
      }).catch((err) => {
      console.log("Fetch Error :", err);
    });
  } else if (sessionStorage.getItem("homesInitialData").length !== 0) {
    const initialHomesObjForUsage = JSON.parse(sessionStorage.getItem("homesInitialData"));
    for (let i = 0; i < initialHomesObjForUsage.length; i++) {
      const homesItemCreated = createHomesItem(initialHomesObjForUsage, i);
      homesItemCreated.classList.add("initial-homes-item");
      insertHomesItem(homesItemCreated);
    }
  }
}

export {createInitialItems};
