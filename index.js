const express = require("express");
const app = express()
const bodyParser = require('body-parser');
const path = require("path")
const { exec } = require('child_process');
const fs = require("fs")


app.use(express.static(path.join(__dirname, "public")))
// app.use("/api/" ,bodyParser.urlencoded({ extended: false }));
// app.use("/api/", bodyParser.json());

app.use(function (req, res, next) {

	res.setHeader('Access-Control-Allow-Origin', '*');

	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	res.setHeader('Access-Control-Allow-Headers', '*');

	res.setHeader('Access-Control-Allow-Credentials', true);


	next();
});

app.listen(80, () => console.log('Running BEEX Website'))