import React from 'react'
import {Card} from 'react-bootstrap'

const AboutPage = () => {
    return (
        <div style={{width: "40rem", margin: "auto", marginTop: "5rem"}}>
            <Card className="text-left">
                <Card.Header>Words from the developer</Card.Header>
                <Card.Body>
                    <Card.Title>BackEnd Jobs</Card.Title>
                    <Card.Text>
                        Made by Marshal Wuisan for Back-End Web Development using firebase
                        <br/>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    )
}

export default AboutPage