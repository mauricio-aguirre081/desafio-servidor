const fs = require("fs");
/* const productos = 
[                                                                                                         
    {                                   
      title: 'Escuadra',       
      price: 123.45,                                                                                   
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png',                                     
      id: 1                                                                                         
    },                                                                                                                                                   
    {                                                                                                
      title: 'Calculadora',                                                                                 
      price: 234.56,                                                                                   
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',                                          
      id: 2                                                                                             
    },                                                                                                                                                   
    {                                                                                               
      title: 'Globo Terráqueo',                                                                      
      price: 345.67,                                
      thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',                                   
      id: 3                                                                                          
    }                                                                                                       
] ; */

class Contenedor {
    async save(producto) {
        try{
            await fs.promises.writeFile("./productos.txt", JSON.stringify(producto,null,2), "utf-8" );
        } catch (errorContenedor){
            console.log(errorContenedor)
        }
    }

    async getAll() {
        try{
            const contenido = await fs.promises.readFile("./productos.txt", "utf-8")
            return contenido;
        } catch (errorGetAll){
            console.log(errorGetAll);
        }
    }
    async saveNew(productoNuevo) {
        const contenido = await this.getAll();
        const indice = contenido.sort((a,b) => b.id - a.id)[0].id;
        productoNuevo.id = indice + 1;
        contenido.push(productoNuevo);
        this.save(contenido);
    }
    async getById(id) {
        const contenido = await this.getAll();
        const productoBuscado = contenido.filter((producto) => producto.id == id);
        console.log(productoBuscado);
    }
    async deleteById(id) {
        const contenido = await this.getAll();
        const productoEliminado = contenido.filter((producto) => producto.id !== id);
        console.log(productoEliminado);
    }
    async deleteAll() {
        const contenido = await this.getAll();
        const todoeliminado = contenido.length(0);
        //contenido.splice(0, contenido.length);
        console.log(todoeliminado);
    }


}

const contenedor = new Contenedor();

//contenedor.getAll();

const productoNuevo = {                                   
    title: 'Mochila',       
    price: 500.45,                                                                                   
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/bag-pack-container-school-256.png',                                     
    id: 1                                                                                         
    }

contenedor.saveNew(productoNuevo);