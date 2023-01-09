import React from "react";

const MyNav =  () => {

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <a className="navbar-brand" href="#"><img src="/images/Group 114.png" alt="Group 114"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                    </li>
                    
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button className="btn btn-primary my-2 my-sm-0 submit-button" type="submit">Start a Company</button>
                    </form>
                </div>

            </nav>

            <div className="abc">
                <img className="ellipse-19-top" src="images/Ellipse 19-1.png" alt="Ellipse 19-1"/>
                <img className="ellipse-19-top-side" src="images/Ellipse 19-1.png" alt="Ellipse 19"/>
            </div>

            <div className="my-images">
                <img className="ellipse-21-top-side" src="images/Ellipse 21.png" alt="Ellipse 21"/>
            </div>

            <div className="my-images">
                <img className="ellipse-17-top-side" src="images/Ellipse 19-1.png" alt="Ellipse 19-1"/>
            </div>
        </div>
    )
}

export default MyNav;