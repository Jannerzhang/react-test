import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PdfAll() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function render(nums){
        return new Array(nums).fill(1).map((e,i)=>{
            if(i>0){
                return <Document
                            key={i}
                            file="test.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
                        >
                            <Page pageNumber={i+1} />
                        </Document>
            }
        })
   }
  return (
    <div>
      <Document
        file="test.pdf" //PDF文件在此
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
     	{
            numPages > 0 && render(numPages) //这里显示除了第一张PDF，剩下所有的PDF
        }
    </div>
  );
}
export default PdfAll;