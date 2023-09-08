import { useEffect, useState } from 'react';
import './App.css';
import { postRequest } from './client';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

type reqBody = { Name: string; Id: number }

function App() {
  const [data, setData] = useState({ name: '', id: 0 })

  const request = async () => {
    const body = {
      name: "Admin",
      id: 100
    }

    const res = await postRequest(body)
    setData(res)
  }

  // useEffect(() => {
  //     // request()
  // }, [])

  const pdf = [
    {
      uri: "https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK",
      fileType: "pdf",
      fileName: "123.pdf"
    }
  ]

  const excel = [
    {
      uri: "https://www.w3resource.com/python-exercises/pandas/excel/SaleData.xlsx",
      fileType: "xlsx",
      fileName: "SaleData.xlsx"
    }
  ]

  const ppt = [
    {
      uri: "https://scholar.harvard.edu/files/torman_personal/files/samplepptx.pptx",
      fileType: "pptx",
      fileName: "samplepptx.pptx"
    }
  ]

  const doc = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
      fileName: "demo.docx"
    }
  ]

  return (
    <>
      <div className="App">
        <div className='doc-container'>
          <div className="topic">Excel Sheet Viewer</div>
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            documents={excel}
            config={{
              header: {
                disableHeader: true,
                disableFileName: false,
                retainURLParams: false
              },
              pdfVerticalScrollByDefault: true,
            }}
            theme={{
              disableThemeScrollbar: false,
            }}
            style={{ width: "auto", height: "90%" }}
          />
        </div>

        <div className='doc-container'>
          <div className="topic">PDF Viewer</div>
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            documents={pdf}
            config={{
              header: {
                disableHeader: true,
                disableFileName: false,
                retainURLParams: false
              },
              pdfVerticalScrollByDefault: true,
            }}
            theme={{
              disableThemeScrollbar: false,
            }}
            style={{ width: "auto", height: "90%" }}
          />
        </div>

        <div className='doc-container'>
          <div className="topic">PPT Viewer</div>
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            documents={ppt}
            config={{
              header: {
                disableHeader: true,
                disableFileName: false,
                retainURLParams: false
              },
              pdfVerticalScrollByDefault: true,
            }}
            theme={{
              disableThemeScrollbar: false,
            }}
            style={{ width: "auto", height: "90%" }}
          />
        </div>

        <div className='doc-container'>
          <div className="topic">DOC Viewer</div>
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            documents={doc}
            config={{
              header: {
                disableHeader: true,
                disableFileName: false,
                retainURLParams: false
              },
              pdfVerticalScrollByDefault: true,
            }}
            theme={{
              disableThemeScrollbar: false,
            }}
            style={{ width: "auto", height: "90%" }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
