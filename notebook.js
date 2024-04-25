//Consultar API para obtener los datos del Producto y mostrarlos en la página
//https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1

window.onload = start;

function start(){
    loadProduct();
}

async function loadUrlApi(urlAPI){
    const response = await fetch(urlAPI);
    return response.json();
}

async function loadProduct(){
    const notebook = await loadUrlApi("https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1");

    document.getElementById("image_url").src = notebook.image_url;
    document.getElementById("title").textContent = notebook.title;
    document.getElementById("description").textContent = notebook.description;
    document.getElementById("factory_url").href = notebook.factory_url;

    for(let notebooks of notebook.notebooksTypes){
        const li = document.createElement("li");
        //li.textContent = "Memoria Ram: " + notebooks.ramAmount + " | Precio ARS: " + notebooks.price;
        li.textContent = `Memoria Ram: ${notebooks.ramAmount} | Precio ARS: ${notebooks.price}`;
        
        document.getElementById("notebooksTypes").appendChild(li);
    }
}