import React from "react";
import { Col, row } from 'reactstrap';
import { Clock, Hand, Flight, Pexels, Pineapple, Umbrella } from "./ProfilePic";

const ProjectCards = () => {
    return (
        <>
            <div className="row d-flex justify-content-center" id="maxWidth">
                <Col className="col-12 d-flex justify-content-center mt-3 pt-5">
                    <h2>Projects</h2>
                </Col>
                <div id="line"><hr className="hRule"/></div>
                    <div className="col-12 col-sm-6 col-md-4 pr-3 d-flex justify-content-center mt-3">
                        <div className="card">
                            <img src={Clock} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Bootstrap Project</h5>
                                <p className="card-text d-none d-lg-block">Here I will have a quick description of the project and the role I had in creating it.</p>
                                <a href="#" className="btn btn-primary mt-1"><i className="fa-solid fa-globe pr-1"></i>Visit Site</a>
                                <a href="https://github.com/" className="btn btn-secondary mt-1"><i className="fa-brands fa-github pr-1"></i>See Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 pr-3 mt-3 d-flex justify-content-center">
                        <div className="card">
                            <img src={ Hand } className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">React Project</h5>
                            <p className="card-text d-none d-lg-block">Here I will have a quick description of the project and the role I had in creating it</p>
                            <a href="#" className="btn btn-primary mt-1"><i className="fa-solid fa-globe pr-1"></i>Visit Site</a>
                            <a href="https://github.com/" className="btn btn-secondary mt-1"><i className="fa-brands fa-github pr-1"></i>See Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 pr-3 mt-3 d-flex justify-content-center">
                        <div className="card" >
                            <img src={ Flight } className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Javascript Project</h5>
                            <p className="card-text d-none d-lg-block">Here I will have a quick description of the project and the role I had in creating it.</p>
                            <a href="#" className="btn btn-primary mt-1"><i className="fa-solid fa-globe pr-1"></i>Visit Site</a>
                            <a href="https://github.com/" className="btn btn-secondary mt-1"><i className="fa-brands fa-github pr-1"></i>See Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 pr-3 mt-3 d-flex justify-content-center">
                        <div className="card">
                            <img src={ Pineapple } className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Future Client Project</h5>
                            <p className="card-text d-none d-lg-block">Here I will have a quick description of the project and the role I had in creating it.</p>
                            <a href="#" className="btn btn-primary mt-1"><i className="fa-solid fa-globe pr-1"></i>Visit Site</a>
                            <a href="https://github.com/" className="btn btn-secondary mt-1"><i className="fa-brands fa-github pr-1"></i>See Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 pr-3 mt-3 d-flex justify-content-center">
                        <div className="card">
                            <img src={ Pexels } className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Personal Project</h5>
                            <p className="card-text d-none d-lg-block">Here I will have a quick description of the project and the role I had in creating it.</p>
                            <a href="#" className="btn btn-primary mt-1"><i className="fa-solid fa-globe pr-1"></i>Visit Site</a>
                            <a href="https://github.com/" className="btn btn-secondary mt-1"><i className="fa-brands fa-github pr-1"></i>See Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 pr-3 mt-3 d-flex justify-content-center">
                        <div className="card">
                            <img src={ Umbrella } className="card-img-top" alt="..." />
                            <div className="card-body">
                            <h5 className="card-title">Catch Me Game</h5>
                            <p className="card-text d-none d-lg-block">Here I will have a quick description of the project and the role I had in creating it.</p>
                            <a href="#" className="btn btn-primary mt-1"><i className="fa-solid fa-globe pr-1"></i>Visit Site</a>
                            <a href="https://github.com/" className="btn btn-secondary mt-1"><i className="fa-brands fa-github pr-1"></i>See Code</a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ProjectCards;