import express from "express";
import React from "react";
import {renderToString} from "react-dom/server"
import App from "../components/app"
import hbs from "handlebars";


const router = express.Router();

router.get('/', async (req, res) => {

    const theHtml = `
    <html>
    <head><title>Somektrees</title></head>
    <body>
    <div id="reactapp">{{{reactapp}}}</div>
    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
    </body>
    `;

    const htmlTemplate = hbs.compile(theHtml);
    console.log(renderToString)
    const reactComp = renderToString(<App/>);
    console.log(reactComp)
    console.log(htmlTemplate)
    const htmlToSend = htmlTemplate({reactapp: reactComp});
    console.log(htmlToSend);
    res.status(200).send(htmlToSend);

})
;

export default router;