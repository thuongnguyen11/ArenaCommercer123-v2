document.getElementById("sort-by").addEventListener("change", updateData);
document.getElementById("btn-submit-price").addEventListener("click", updateData);
document.querySelectorAll(".checkbox").forEach(checkbox => {
  checkbox.addEventListener("change", updateData);
});

function getCurrentPage() {
  document.querySelectorAll('.num-of-page').forEach(current_page => {
    current_page.addEventListener('click', () => {
      updateData(current_page.dataset.url);
    });
  });

}

getCurrentPage();


let dataPrice = '';

function updateData(current_page) {
  //sort by
  const dataSortBy = document.getElementById('sort-by').value;
  // filter checkbox
  var markedCheckbox = document.getElementsByClassName("checkbox");
  const filterChecked = [];
  for (var checkbox of markedCheckbox) {
    if (checkbox.checked) {
      filterChecked.push(`&${checkbox.name}=${checkbox.value.replace(' ', '+')}`);
    }
  }
  const dataFilter = filterChecked.join('');

  //filter price
  dataPrice = ''
  const minPrice = document.querySelector(".min-price");
  const maxPrice = document.querySelector(".max-price");
  const minValue = `&${minPrice.name}=${minPrice.value}`;
  const maxValue = `&${maxPrice.name}=${maxPrice.value}`;
  dataPrice = `${minValue + maxValue}`;

  pushURL(dataSortBy, dataFilter, dataPrice, current_page);
  getURL();


}

function pushURL(dataSortBy, dataFilter, dataPrice, current_page) {
  isExist = typeof (current_page) == 'object';
  current_page = isExist ? '' : `&page=${current_page}`
  history.pushState('', "", `?sort_by=${dataSortBy + dataFilter + dataPrice + current_page}`);
}

async function getURL() {
  const response = await fetch(location.href);
  const products = await response.text();
  inserProducts(products);
}

function inserProducts(data) {
  const div = document.createElement("div");
  div.innerHTML = data;
  const products = div.querySelectorAll('#current-page > * ');
  document.getElementById('current-page').innerHTML = '';
  products.forEach(item => {
    document.getElementById('current-page').appendChild(item);
  })
  getCurrentPage();

}

function selector() {
  jQuery.post(
    window.Shopify.routes.root + 'cart/update.js',
    {
      attributes: {
        idCard: Number(document.getElementById('number-item').value),
      },
    }, () => {
      updateData();
    }

    // (data) => {
    //   document.getElementById('number-item').closest('form').submit();
    // }
  );
}


window.selector = selector;
window.updateData = updateData;

