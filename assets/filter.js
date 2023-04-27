(() => {
  // app/scripts/filter.js
  Shopify.queryParams = {};
  if (location.search.length) {
    for (i = 0, aCouples = location.search.prototype.slice(1).split("&"); i < aCouples.length; i++) {
      aKeyValue = aCouples[i].split("=");
      if (aKeyValue.length > 1) {
        Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
      }
    }
  }
  var aKeyValue;
  var i;
  var aCouples;
  function myFunction() {
    var value = document.getElementById("sort-by").value;
    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
    console.log("abc");
  }
  window.myFunction = myFunction;
})();
