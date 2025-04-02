import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.mode === "light" ? "white" : "#2d3747",
        border:'1px solid',
        borderColor:props.mode === "light" ? "white":"#2d3747"

    }

    return (
        <div className='container my-2 '  >
            <h1 style={{
                backgroundColor: props.mode === "light" ? "white" : "#343e4f",color: props.mode === "light" ? "black" : "white",

            }}>About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item"  >
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        All-in-One Text Formatting Tool
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle} >
                        <div className="accordion-body">
                        This tool offers a comprehensive solution for all your text formatting needs. You can easily convert your text to uppercase or lowercase, remove extra spaces, and even capitalize text with a single click. Its user-friendly interface makes it simple to use, while its efficiency ensures that text formatting is done quickly. Plus, once you've formatted your text, you can copy it instantly for further use, making this tool both convenient and time-saving.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Quick and Efficient
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                        The tool is highly fast and efficient. You can save time when formatting and copying your text. It provides instant responses, so you don’t have to waste time after every edit. It quickly gives you the results, allowing you to complete your tasks more efficiently.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        User-Friendly Interface
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
                        <div className="accordion-body">
                        The tool comes with a simple and clean interface, making it very easy to use. You can format your text without any complications. The interface is so intuitive that you don’t need any special training, and you can quickly transform your text.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
