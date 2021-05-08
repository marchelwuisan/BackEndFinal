import React from 'react'
import * as b from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Card = ({title, subtitle, text, link, idx}) => {
    return (
        
        <b.Card style={{ margin: '0.25rem' }}>
            <b.Card.Body>
                <b.Card.Title>{title}</b.Card.Title>
                <b.Card.Subtitle className="mb-2 text-muted">{subtitle}</b.Card.Subtitle>
                <b.Card.Text>
                    {text}
                </b.Card.Text>
                <b.Card.Link as={Link} to={`/userDetail/${idx}`}>{link}</b.Card.Link>
            </b.Card.Body>
        </b.Card>
    )
}

export default Card