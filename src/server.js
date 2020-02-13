import express from "express";
import compression from "compression";
import index from "./routes/index";

// Server var
const app = express();

// Middleware
app.use(compression());
console.log(__dirname);
app.use(express.static(__dirname + "/public"));

//Routes
app.use("/", index);

const port = process.env.PORT || 3000;

app.listen(port, function listenHandler() {
    console.info('Running on ${port}')
});