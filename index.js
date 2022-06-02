const pokem =  [{
    id: 1,
    imagem:"https://toppng.com/uploads/preview/pikachu-logo-115510579622mch5qulg6.png",
    descricao:"um pokemon pequeno",
    regiao:"kanto",
    nome:"pikachu",
    tipo:"eletrico"
},
{
    id: 2,
    imagem:"https://toppng.com/uploads/preview/pikachu-logo-115510579622mch5qulg6.png",
    descricao:"um pokemon pequeno",
    regiao:"kanto",
    nome:"pikachu",
    tipo:"eletrico"
},
{
    id: 3,
    imagem:"https://toppng.com/uploads/preview/pikachu-logo-115510579622mch5qulg6.png",
    descricao:"um pokemon pequeno",
    regiao:"kanto",
    nome:"pikachu",
    tipo:"eletrico"
},
{
    id: 4,
    imagem:"https://toppng.com/uploads/preview/pikachu-logo-115510579622mch5qulg6.png",
    descricao:"um pokemon pequeno",
    regiao:"kanto",
    nome:"pikachu",
    tipo:"eletrico"
}
]

let poke = undefined

const express = require("express")
const app = express()
const path = require ("path")
const port = 3000

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


app.get("/", (req, res) => {
    res.render("index",{pokem, poke})
})


app.post("/create", (req, res) => {
     const poke = req.body
     poke.id = pokem.lenght + 1
     pokem.push(poke)
     res.redirect("/")

})

app.listen(3000)
