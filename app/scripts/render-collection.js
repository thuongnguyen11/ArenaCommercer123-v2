console.log(document.getElementById("sort-by"));
document.getElementById("sort-by").addEventListener("change", updateData);
document.getElementById("btn-submit-price").addEventListener("click", updateData);
  
  
document.querySelectorAll(".checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", updateData);
});
function getCurrentPage() {
  document.querySelectorAll(".num-of-page").forEach((current_page) => {
    current_page.addEventListener("click", () => {
      updateData(current_page.dataset.url);
    });
  });
}

getCurrentPage();




// cach 1
// async function getDataLastPage(dataSortBy, dataFilter, dataPrice, pages) {
//   const dataLastPage = await fetch(`${window.location.pathname}?sort_by=${dataSortBy + dataFilter + dataPrice}&page=${pages}`);
//   const html = await dataLastPage.text();
//   const div = document.createElement("div");
//   div.innerHTML = html;
//   const number_items = div.querySelectorAll('#AjaxinateContainer > *');
//   countAllProducts(pages, number_items.length);
// }

//cach1

var dataPrice = "";

//Update data
function updateData(current_page) {
  const dataSortBy = document.getElementById("sort-by").value;
  var markedCheckbox = document.getElementsByClassName("checkbox");
  const filterChecked = [];
  for (var checkbox of markedCheckbox) {
    if (checkbox.checked) {
      filterChecked.push(
        `&${checkbox.name}=${checkbox.value.replace(" ", "+")}`
      );
    }
  }
  const dataFilter = filterChecked.join("");
  dataPrice = "";
  const minPrice = document.querySelector(".min-price");
  const maxPrice = document.querySelector(".max-price");
  const minValue = `&${minPrice.name}=${minPrice.value}`;
  const maxValue = `&${maxPrice.name}=${maxPrice.value}`;
  dataPrice = `${minValue + maxValue}`;
  pushURL(dataSortBy, dataFilter, dataPrice, current_page);
  getURL();
}

// updateData();

//  function countAllProducts () {
//   const current_offset = document.getElementById("AjaxinateContainer").dataset.current_offset;
//   const pages = document.getElementById("AjaxinateContainer").dataset.pages;
//   const total_items = document.getElementById("AjaxinateContainer").dataset.items;

//   let countItemsPerPage = document.getElementById("AjaxinateContainer").dataset.items_per_page;
//   countItemsPerPage = Number(countItemsPerPage);
//   // const result = countItemsPerPage * (pages - 1) + itemLastPages;
//   document.querySelector(".all-products-results").innerHTML = total_items;
//   if (pages >= 1) {
//     const startItem = Number(current_offset) + 1;
//     const endItem = Number(current_offset) + countItemsPerPage;
//     const lastItem = total_items;
//     if (total_items == startItem) {
//       document.querySelector(".showing").innerHTML = `${lastItem}`;
//     } else if (endItem < total_items) {
//       document.querySelector(".showing").innerHTML = `${startItem} - ${endItem}`;
//     } else if (endItem > total_items) {
//       document.querySelector(".showing").innerHTML = `${startItem} - ${lastItem}`;
//     }
//   }
//   console.log(current_offset);
// };

// function showing() {
//   document.querySelector('.show-products-in-page').innerHTML='';
//   document.querySelector('.show-products-in-page').appendChild(document.getElementById('none'));
//   console.log(document.getElementById('none'));
// }
// showing();

function pushURL(dataSortBy, dataFilter, dataPrice, current_page) {
  isExist = typeof current_page == "string";
  current_page = isExist ? `&page=${current_page}` : "";
  history.pushState(
    "",
    "",
    `?sort_by=${dataSortBy + dataFilter + dataPrice + current_page}`
  );

}
async function getURL() {
  const response = await fetch(location.href);
  const products = await response.text();
  inserProducts(products);
}
function inserProducts(data) {
  const div = document.createElement("div");
  div.innerHTML = data;
  const products = div.querySelectorAll("#current-page > * ");
  document.getElementById("current-page").innerHTML = "";
  products.forEach((item) => {
    document.getElementById("current-page").appendChild(item);
  });

  const showingItem = div.querySelectorAll("#none > * ");
  document.getElementById("none").innerHTML = "";
  showingItem.forEach((item) => {
    document.getElementById("none").appendChild(item);
  });

  getCurrentPage();
  Observer123();
  // showing();

  // getDataLastPage(dataSortBy, dataFilter, dataPrice, pages);
}
function selector() {
  jQuery.post(
    window.Shopify.routes.root + "cart/update.js",
    {
      attributes: {
        idCard: Number(document.getElementById("number-item").value),
      },
    },
    () => {
      updateData();
    }
  );
}
window.selector = selector;
window.updateData = updateData;

