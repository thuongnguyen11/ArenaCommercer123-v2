(() => {
  // app/scripts/infinite-loading.js
  async function GetApi(url, InfinitePoint) {
    const response = await fetch(url);
    const html = await response.text();
    insertData(html, InfinitePoint);
  }
  function insertData(data, InfinitePoint) {
    const div = document.createElement("div");
    div.innerHTML = data;
    const new_url = div.querySelector("#product-list-foot").dataset.url;
    InfinitePoint.setAttribute("data-url", new_url);
    const products = div.querySelectorAll("#AjaxinateContainer > * ");
    products.forEach((item) => {
      document.getElementById("AjaxinateContainer").appendChild(item);
    });
    const showingItem = div.querySelectorAll("#showing > * ");
    document.getElementById("showing").innerHTML = "";
    showingItem.forEach((item) => {
      document.getElementById("showing").appendChild(item);
    });
    if (new_url == "") {
      document.getElementById("delete-load").innerHTML = "";
    }
  }
  function Observer() {
    const newItem = document.getElementById("product-list-foot");
    if (!newItem)
      return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.url.length && GetApi(entry.target.dataset.url, newItem);
        }
      });
    });
    observer.observe(newItem);
  }
  Observer();
  document.addEventListener("shopify:section:load", () => {
    Observer();
    document.getElementById("sort-by").addEventListener("change", updateData);
    document.getElementById("btn-submit-price").addEventListener("click", updateData);
    document.querySelectorAll(".checkbox").forEach((checkbox) => {
      checkbox.addEventListener("change", updateData);
    });
  });
  window.Observer = Observer;
})();
