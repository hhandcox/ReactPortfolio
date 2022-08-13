import React from "react";
import { Card, Col, CardBody, row, Container } from "reactstrap";

const AboutTech = () => {
    return (
        <section className="pt-4 aboutTechCard" id="techCards">
            <div className="container px-lg-5" id="tech">
            <div className="row">
                <div className="col-lg-6 col-xl-4 mb-5">
                    <div className="Card infoCard border-0 h-100">
                        <div className="Card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature mb-4 mt-n4"><i className="fa-brands fa-bootstrap round-icon fontIcon"></i></div>
                            <h2 className="fw-bold">Bootstrap & Sass</h2>
                            <p className="mb-0">Here I will add relevant information about my knowledge with Bootstrap & Sass!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 mb-5">
                    <div className="Card infoCard border-0 h-100">
                        <div className="Card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature mb-4 mt-n4"><i className="fa-solid fa-code round-icon fontIcon"></i></div>
                            <h2 className="fs-4 fw-bold">HTML5, CSS3, Javascript</h2>
                            <p className="mb-0">Here I will add relevant information about my knowledge with the big 3!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 mb-5">
                    <div className="Card infoCard border-0 h-100">
                        <div className="Card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature mb-4 mt-n4"><i className="fa-brands fa-react round-icon fontIcon"></i></div>
                            <h2 className="fs-4 fw-bold">React & React Native</h2>
                            <p className="mb-0">Here I will add relevant information about my knowledge with React!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 mb-5">
                    <div className="Card infoCard border-0 h-100">
                        <div className="Card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature mb-4 rounded-3 mt-n4"><i className="fa-brands fa-node-js round-icon fontIcon"></i></div>
                            <h2 className="fs-4 fw-bold">NodeJS</h2>
                            <p className="mb-0">Here I will add relevant information about my knowledge with NodeJS!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 mb-5">
                    <div className="Card infoCard border-0 h-100">
                        <div className="Card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature rounded-3 mb-4 mt-n4"><i className="fa-brands fa-mdb round-icon fontIcon"></i></div>
                            <h2 className="fs-4 fw-bold">MongoDB</h2>
                            <p className="mb-0">Here I will add relevant information about my knowledge with MongoDB!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 mb-5">
                    <div className="Card infoCard border-0 h-100">
                        <div className="Card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature rounded-3 mb-4 mt-n4"><i className="fa-brands fa-python round-icon fontIcon"></i></div>
                            <h2 className="fs-4 fw-bold">Python</h2>
                            <p className="mb-0">Here I will add relevant information about my knowledge with Python!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>       
    )
}

export default AboutTech;