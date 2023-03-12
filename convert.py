from flask import Flask, request, send_file
from io import BytesIO
import os
import pypdf2
import docx

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert():
    pdf_file = request.files['pdf']
    pdf_reader = pypdf2.PdfFileReader(pdf_file)
    output_file = BytesIO()
    doc_writer = docx.Document()

    for page_num in range(pdf_reader.getNumPages()):
        page = pdf_reader.getPage(page_num)
        text = page.extractText()
        doc_writer.add_paragraph(text)

    doc_writer.save(output_file)
    output_file.seek(0)

    return send_file(output_file, attachment_filename='converted.docx', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
