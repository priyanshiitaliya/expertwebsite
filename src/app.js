
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
require("./db/conn.js");
const Register = require("./model/usermessage");
const User = require("./model/usermessage");


const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.render("index");
})

app.get("/aboutus", (req, res) => {
    res.render("aboutus");
})

app.get("/gallery", (req, res) => {
    res.render("gallery");
})

app.get("/page1", (req, res) => {
    res.render("page1");
})
app.get("/page2", (req, res) => {
    res.render("page2");
})
app.get("/page3", (req, res) => {
    res.render("page3");
})
app.get("/page4", (req, res) => {
    res.render("page4");
})
app.get("/page5", (req, res) => {
    res.render("page5");
})
app.get("/page6", (req, res) => {
    res.render("page6");
})
app.get("/page7", (req, res) => {
    res.render("page7");
})
app.get("/page8", (req, res) => {
    res.render("page8");
})
app.get("/page9", (req, res) => {
    res.render("page9");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.get("/partner", (req, res) => {
    res.render("partner");
})

app.get("/mditpage", (req, res) => {
    res.render("mditpage");
})


app.post("/contact", async (req, res) => {
    try {
        // res.send(req.body);
        const userData = new User(req.body);
        await userData.save();
        res.status(201).render("index");

    } catch (err) {
        res.status(500).send(err);
    }
})

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
})
