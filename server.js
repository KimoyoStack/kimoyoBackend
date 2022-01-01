// node_modules 
import express  from "express"
import pkg from '@prisma/client'
const {PrismaClient} = pkg
const prisma = new PrismaClient()


// app
let app = express()


// Middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', (req,res)=>{
 console.log("fool");
let cool = prisma.compteUtilisateur.create({
    data:{
        numero:"92118764",
        password:"boncool"
    }
})
cool.catch((error)=>{
    console.error(error);
}).then(()=>{
    console.log("cool");
})

 res.json({})

})





// Port 
let port = 8000 || process.env.PORT
app.listen(port, (err, res) => {
    if(err){
        throw err
    }
    console.log("Server listen on" + port)
})