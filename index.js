//Consultar API y tomar el valor del campo amount_of_products
//https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics

//Consultar API y mostrar el listado de productos disponibles en la página principal
//https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products

window.onload = start;

function start(){
    amountOfProducts();
    productList();
}

//Funcion para cargar el URL de la API con los datos a consultar
//el Fetch es una promise entonces se vuelve necesario trabajar con funcio asíncrona
async function loadUrlApi(urlAPI){
    const response = await fetch(urlAPI);
    return response.json();
}

async function amountOfProducts(){
    const notebookAmount = await loadUrlApi("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics");
    document.getElementById("cantidad-articulos").textContent = notebookAmount.amount_of_products;
}

async function productList(){
    const notebookList = await loadUrlApi("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products");
    
    for(const notebook of notebookList){

        const divContenedor = document.createElement("div");
        divContenedor.className = "view-product";

        const notebookTitle = document.createElement("h3");
        notebookTitle.textContent = notebook.title;
        const notebookImage_url = document.createElement("img");
        notebookImage_url.src = notebook.image_url;

        const linkProducto = document.createElement("a");
        linkProducto.href = "notebook.html";
        linkProducto.target = "_blank";
        linkProducto.appendChild(notebookTitle);
        linkProducto.appendChild(notebookImage_url);
        divContenedor.appendChild(linkProducto)
        document.getElementById("product-list").appendChild(divContenedor);

    }
}

