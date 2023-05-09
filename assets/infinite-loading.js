(() => {
  // app/scripts/infinite-loading.js
  var newItem = document.getElementById("product-list-foot");
  if (newItem) {
    const service = function(target) {
      var url = target.dataset.url;
      async function getApi() {
        const response = await fetch(url);
        const html = await response.text();
        return html;
      }
      function insertData(data) {
        const div = document.createElement("div");
        div.innerHTML = data;
        const new_url = div.querySelector("#product-list-foot").dataset.url;
        console.log(new_url);
        target.setAttribute("data-url", new_url);
        const products = div.querySelectorAll("#AjaxinateContainer > * ");
        console.log(products);
        products.forEach((item) => {
          document.getElementById("AjaxinateContainer").appendChild(item);
        });
      }
      const services = {
        getApi,
        insertData
      };
      return services;
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { getApi, insertData } = service(entry.target);
          getApi().then((data) => {
            insertData(data);
          }).finally(() => {
          });
        }
      });
    });
    observer.observe(newItem);
  }
})();
