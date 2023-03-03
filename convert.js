import * as fs from "fs";

const wordsApi = new WordsApi("####-####-####-####-####", "##################");

const doc = fs.createReadStream("Input.pdf");
const request = new model.ConvertDocumentRequest({
    document: doc,
    format: "docx"
});

const convert = wordsApi.convertDocument(request)
.then((convertDocumentResult) => {
    console.log("Result of ConvertDocument: ", convertDocumentResult);
});

module.exports = {convertDocument}