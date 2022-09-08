const fs = require ("fs")
const express = require ('express')
const app = express()
const PORT = 8080 ;
const server = app.listen(PORT, () => {
    console.log('servicio iniciado')
});

class Contenedor {

    async getAll() {
        try{
            const contenido = await fs.promises.readFile("./productos.txt", "utf-8")
            return contenido;
        } catch (errorGetAll){
            console.log(errorGetAll);
        }
    }

    async getById(id) {
        const contenido = await this.getAll();
        const productoBuscado = contenido.filter((producto) => producto.id == id);
        console.log(productoBuscado);
    }

}

const Contenedor = new Contenedor();

app.get("*/productos", (req, res) => {
    res.send(`<p> Productos: ${Contenedor.getAll()} `)
});

app.get("/productosRandom", (req, res) => {
    const random = Math.floor(Math.random() *6+1)
    res.send(`<p> Productos: ${Contenedor.getById(random)} `)
})
