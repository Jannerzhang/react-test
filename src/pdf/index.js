import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export const MyApp  = () =>{
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="test.pdf" //PDF文件在此
        onLoadSuccess={onDocumentLoadSuccess}
        // renderMode ='none'
        className = 'aaa'
      >
        <Page pageNumber={pageNumber} width={600} canvasBackground ='transparent'  />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}


export const PdfAll  = () =>{
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function onLoadSuccess(a) {
    console.log('===a',a)
  }
  
  function render(nums){
        return new Array(nums).fill(1).map((e,i)=>{
            if(i>0){
                return <Document
                            key={i}
                            file="test.pdf"
                            onLoadSuccess={onDocumentLoadSuccess}
  
                        >
                            <Page pageNumber={i+1} 
                                    renderAnnotationLayer ={false}
                                    renderTextLayer = {false}
                                    onLoadSuccess={onLoadSuccess}
                            />
                            <p>Page {i+1} of {numPages}</p>
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
        <Page pageNumber={pageNumber} 
                renderAnnotationLayer ={false}
                renderTextLayer = {false}
        />
        <p>Page {pageNumber} of {numPages}</p>
      </Document>
     	{
            numPages > 0 && render(numPages) //这里显示除了第一张PDF，剩下所有的PDF
        }
        
    </div>
  );
}