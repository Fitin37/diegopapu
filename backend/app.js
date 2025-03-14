// Importo todo lo de la libreria de Express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import clientesRoutes from "./src/routes/clientes.js";
import empleadorRoutes from "./src/routes/empleados.js";
import sucursalesRoutes from "./src/routes/sucursales.js";

// Creo una constante que es igual a la libreria que importé
const app = express();

//Que acepte datos en json
app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/products", productsRoutes);

app.use("/api/CLientes",clientesRoutes);

app.use("/api/Employess",empleadorRoutes);

app.use("/api/sucursales",sucursalesRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;
