import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Col, Row } from "reactstrap";
import ProjectCards from "../components/ProjectCards"

const Projects = () => {
    return (
        <>
            <Header />
            <ProjectCards />
        </>
    );
}

export default Projects;