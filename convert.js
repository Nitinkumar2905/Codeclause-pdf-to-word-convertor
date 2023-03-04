// import * as fs from "fs";
const fs = require("fs");
// const wordsApi = new wordsApi("####-####-####-####-####", "##################");


const doc = fs.createReadStream("Input.pdf");
const request = new model.ConvertDocumentRequest({
    document: doc,
    format: "docx"
});

const convert = wordsApi.convertDocument(request)
.then((convertDocumentResult) => {
    console.log("Result of ConvertDocument: ", convertDocumentResult);
});

module.exports = {convert}