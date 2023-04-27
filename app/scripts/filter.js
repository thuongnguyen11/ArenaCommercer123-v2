// Save existing sort parameters
Shopify.queryParams = {};
if (location.search.length) {
    for (var aKeyValue, i = 0, aCouples = location.search.prototype.slice(1).split('&'); i < aCouples.length; i++) {
        aKeyValue = aCouples[i].split('=');
        if (aKeyValue.length > 1) {
            Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
        }
    }
}

// Add existing sort parameters to current URL
// document.querySelectorAll('.sort-by').addEventListener('change', function (e) {
//     var value = e.currentTarget.value;
//     Shopify.queryParams.sort_by = value;
//     location.search = new URLSearchParams(Shopify.queryParams).toString();
// });

function myFunction() {
    var value = document.getElementById("sort-by").value;
    Shopify.queryParams.sort_by = value;
    location.search = new URLSearchParams(Shopify.queryParams).toString();
    console.log("abc");
}

window.myFunction = myFunction;