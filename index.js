const express = require('express');
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, 'public');

app.set('view engine', 'ejs');

// for home page (or say landing page) we have to create a file with "index.html" file name  

// when we use express .static then we need to give the extension of the file name
// app.use(express.static(publicPath));

// if you r not using req then use _ instead of request
app.get('/', (_, res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

app.get("/profile", (req,res) => {
    const user = {
        name: "Rohit Bharti",
        id: 510519041,
        college: "IIEST",
        skills: ["html", "css", "javascript", "php", 1,2]
    }
    res.render('profile', {user});
})

app.get("/login", (req,res) => {
    res.render("login");
})

app.get('/anyname', (req, res)=>{
    res.sendFile(`${publicPath}/about.html`);
})

app.get('/contact', (req, res)=>{
    res.sendFile(`${publicPath}/contact.html`);
})

// 404 page not found
app.get('*', (req, res)=>{
    res.sendFile(`${publicPath}/notfound.html`);
})

app.listen(8080);