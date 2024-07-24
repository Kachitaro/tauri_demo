import { printers, print, print_file, jobs, job, restart_job, pause_job, resume_job, remove_job } from "tauri-plugin-printer";
// get list printers
const list = await printers()
const data = [
    {
        type: 'image',
        url: 'https://randomuser.me/api/portraits/men/43.jpg',     // file path
        position: 'center',                                  // position of image: 'left' | 'center' | 'right'
        width: '160px',                                           // width of image in px; default: auto
        height: '60px',                                          // width of image in px; default: 50 or '50px'
    }, {
        type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
        value: 'SAMPLE HEADING',
        style: { fontWeight: "700", textAlign: 'center', fontSize: "24px" }
    }, {
        type: 'text',                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
        value: 'Secondary text',
        style: { textDecoration: "underline", fontSize: "10px", textAlign: "center", color: "red" }
    }, {
        type: 'barCode',
        value: '023456789010',
        height: 40,                     // height of barcode, applicable only to bar and QR codes
        width: 2,                       // width of barcode, applicable only to bar and QR codes
        displayValue: true,             // Display value below barcode
        fontsize: 12,
    }, {
        type: 'qrCode',
        value: 'https://github.com/Hubertformin/electron-pos-printer',
        height: 55,
        width: 55,
        style: { margin: '10 20px 20 20px' }
    }, {
        type: 'table',
        // style the table
        style: { border: '1px solid #ddd' },
        // list of the columns to be rendered in the table header
        tableHeader: ['Animal', 'Age'],
        // multi dimensional array depicting the rows and columns of the table body
        tableBody: [
            ['Cat', 2],
            ['Dog', 4],
            ['Horse', 12],
            ['Pig', 4],
        ],
        // list of columns to be rendered in the table footer
        tableFooter: ['Animal', 'Age'],
        // custom style for the table header
        tableHeaderStyle: { backgroundColor: '#000', color: 'white' },
        // custom style for the table body
        tableBodyStyle: { 'border': '0.5px solid #ddd' },
        // custom style for the table footer
        tableFooterStyle: { backgroundColor: '#000', color: 'white' },
    }, {
        type: 'table',
        style: { border: '1px solid #ddd' },             // style the table
        // list of the columns to be rendered in the table header
        tableHeader: [{ type: 'text', value: 'People' }, { type: 'image', path: path.join(__dirname, 'icons/animal.png') }],
        // multi-dimensional array depicting the rows and columns of the table body
        tableBody: [
            [{ type: 'text', value: 'Marcus' }, { type: 'image', url: 'https://randomuser.me/api/portraits/men/43.jpg' }],
            [{ type: 'text', value: 'Boris' }, { type: 'image', url: 'https://randomuser.me/api/portraits/men/41.jpg' }],
            [{ type: 'text', value: 'Andrew' }, { type: 'image', url: 'https://randomuser.me/api/portraits/men/23.jpg' }],
            [{ type: 'text', value: 'Tyresse' }, { type: 'image', url: 'https://randomuser.me/api/portraits/men/53.jpg' }],
        ],
        // list of columns to be rendered in the table footer
        tableFooter: [{ type: 'text', value: 'People' }, 'Image'],
        // custom style for the table header
        tableHeaderStyle: { backgroundColor: 'red', color: 'white' },
        // custom style for the table body
        tableBodyStyle: { 'border': '0.5px solid #ddd' },
        // custom style for the table footer
        tableFooterStyle: { backgroundColor: '#000', color: 'white' },
    },
]
// print pdf file
await print(data, {
    id: "idprinter",  // id printer get from printers()
    preview: true, // Set to true if you want to display the preview
    page_size: {
        width: 300, // unit px
        heigth: 400 // unit px
    },
    print_setting: {
        orientation: "landscape",
        method: "simplex", // duplex | simplex | duplexshort
        paper: "A4", // "A2" | "A3" | "A4" | "A5" | "A6" | "letter" | "legal" | "tabloid"
        scale: "noscale", //"noscale" | "shrink" | "fit"
        repeat: 1, // total copies,
        // range: "1,2,3"    // print page 1,2,3 
        range: {        // print page 1 - 3
            from: 1,
            to: 3
        }
    }
})

// print pdf file
await print_file({
    id: "idfromlistprinter",
    path: 'F:/path/to/file.pdf',
    file: BufferData,
    print_setting: {
        orientation: "landscape",
        method: "simplex", // duplex | simplex | duplexshort
        paper: "A4", // "A2" | "A3" | "A4" | "A5" | "A6" | "letter" | "legal" | "tabloid"
        scale: "noscale", //"noscale" | "shrink" | "fit"
        repeat: 1, // total copies
        // range: "1,2,3"    // print page 1,2,3 
        range: {        // print page 1 - 3
            from: 1,
            to: 3
        }
    }
})

// get all printer jobs
await jobs()

// get printer jobs by printer id 
await jobs(idprinter)

// get job by id
await job(id)

// restart all job
await restart_job()

// restart job by id
await restart_job(id)

// pause all job
await pause_job()

// pause job by id
await pause_job(id)

// resume all job 
await resume_job()

// resume job by id
await resume_job(id)

// remove all job
await remove_job()

// resume job by id
await remove_job(id)
