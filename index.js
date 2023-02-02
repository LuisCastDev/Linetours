import  express  from "express";
import router from "./routes/index.js";
// INSTANCEANDO EXPRESS
const app   = express();
//ASIGNANDO PUERTO
const port = process.env.PORT || 4000;

//HABILITAR PUG
app.set('view engine','pug');
// definir la carpeta estatica
app.use(express.static('./public'));

// agregar routers
app.use('/',router)

app.listen(port, () =>{
    console.log(`el servidor esta funcionando en el puerto ${port}`)
}) 