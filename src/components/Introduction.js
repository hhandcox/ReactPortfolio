import { Button, Col, Row } from 'reactstrap';
import React from 'react';
import '../App.css';
import { useNavigate } from "react-router-dom"


const Introduction = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = 'projects';
        navigate(path);
    }



    return(
        <>
            <Row className='introText mx-auto' >
                <Col className='xs-12'>
                    <h1 className="justify-content-center">Hi, I'm <span className='nameName'>Hugh Handcox</span></h1>
                    <h3 className="nameSubtitle d-flex justify-content-center text-center">I'm an aspiring Full Stack Developer</h3>
                    <p className="aboutMe justify-content-center">Currently enrolled in Nucamp's Full Stack Bootcamp. Devoted to mastering the art and technical ability needed tocraft versatile web experiences focused on simplicity and function.</p>
                    <Button outline color='primary' onClick={routeChange}>SEE THE WORK</Button>
                </Col>
            </Row>
        </>
    )
}

export default Introduction;