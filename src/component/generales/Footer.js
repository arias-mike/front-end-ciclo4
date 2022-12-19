import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row } from 'react-bootstrap'

function Footer() {
    return (
        <Row className="footer">
            <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div className="text-white mb-3 mb-md-0">
                Copyright © 2022. Todos los derechos reservados.
                </div>

                <div>
                <a href="#!" className="text-white me-4">
                    <FontAwesomeIcon icon={faFacebook}/>
                </a>
                <a href="#!" className="text-white me-4">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="#!" className="text-white me-4">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="#!" className="text-white">
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
                </div>
            </div>
        </Row>
    )
}

export default Footer