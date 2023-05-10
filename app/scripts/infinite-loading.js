
// async function getApi() {
//     const response = await fetch(location.href);
//     const newURL = await response.text();
//     insertData(newURL);
//   }

// function InfiniteAbc() {

async function GetApi(url, InfinitePoint) {
    const response = await fetch(url);
    const html = await response.text();
    insertData(html, InfinitePoint);
}

function insertData(data, InfinitePoint) {
    const div = document.createElement("div");
    div.innerHTML = data;
    const new_url = div.querySelector("#product-list-foot").dataset.url;
    console.log(new_url);
    if(new_url==''){
        InfinitePoint.innerHTML='';
    } else {
        InfinitePoint.setAttribute("data-url", new_url);
        const products = div.querySelectorAll('#AjaxinateContainer > * ');
        products.forEach(item => {
            document.getElementById('AjaxinateContainer').appendChild(item);
        })
    }
    
}

function Observer() {
    const newItem = document.getElementById('product-list-foot');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log(entry.isIntersecting);
                GetApi(entry.target.dataset.url, newItem);
            }
        })
    })
    observer.observe(newItem);

}

Observer();


function Srcoll() {
    window.addEventListener("scroll", () => {
        Observer()
    }, { once: true })
}

document.getElementById('collection-toolbar').addEventListener('change', () => {
    Srcoll();
})


// }
// if (!newItem.dataset.url) {
//     observer.disconect();
// }
// }


// };

// export default InfiniteAbc;


