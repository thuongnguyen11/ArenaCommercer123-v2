document.getElementById("sort-by").addEventListener("change", updateData);
document.getElementById("btn-submit-price").addEventListener("click", updateData);
document.querySelectorAll(".checkbox").forEach(checkbox => {
  checkbox.addEventListener("change", updateData);
});

function updateData() {
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
  const minPrice = document.querySelectorAll(".min-price")[0];
  const maxPrice = document.querySelectorAll(".max-price")[0];
  const minValue = `&${minPrice.name}=${minPrice.value ? minPrice.value : minPrice.min}`;
  const maxValue = `&${maxPrice.name}=${maxPrice.value ? maxPrice.value : maxPrice.max}`;
  const dataPrice = `${minValue + maxValue}`

  pushURL(dataSortBy, dataFilter, dataPrice);
  getURL();

}

function pushURL(dataSortBy, dataFilter, dataPrice) {
  history.pushState('', "", `?sort_by=${dataSortBy + dataFilter + dataPrice}`);
}

async function getURL() {
  const response = await fetch(location.href);
  console.log(response);
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
