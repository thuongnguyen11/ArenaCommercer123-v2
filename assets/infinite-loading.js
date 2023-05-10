(() => {
  // app/scripts/infinite-loading.js
  var newItem = document.getElementById("product-list-foot");
  function InfiniteLoading(newItem2) {
    console.log("vao r1");
    async function GetApi3(url, InfinitePoint) {
      const response = await fetch(url);
      const html = await response.text();
      insertData(html, InfinitePoint);
      console.log("chay di");
    }
    function insertData(data, InfinitePoint) {
      const div = document.createElement("div");
      div.innerHTML = data;
      const new_url = div.querySelector("#product-list-foot").dataset.url;
      console.log(new_url);
      InfinitePoint.setAttribute("data-url", new_url);
      const products = div.querySelectorAll("#AjaxinateContainer > * ");
      products.forEach((item) => {
        document.getElementById("AjaxinateContainer").appendChild(item);
      });
    }
    const observer = new IntersectionObserver((entries) => {
      console.log("chay dum cai di");
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("huhu");
          GetApi3(entry.target.dataset.url, newItem2);
        }
      });
    });
    observer.observe(newItem2);
  }
  InfiniteLoading(newItem);
})();
