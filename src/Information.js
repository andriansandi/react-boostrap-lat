import React from 'react'
import ReadMore from './ReadMore';

// Bootstrap 
import {
    Card
} from 'react-bootstrap'
export default function Information(props) {
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://dummyimage.com/286x180/000/fff" />
                <Card.Body>
                    <Card.Title>{ props.title }</Card.Title>
                    <Card.Text>By: { props.author }</Card.Text>
                    <Card.Text>{ props.body }</Card.Text>
                    <Card.Text>{ props.date }</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ReadMore />
                </Card.Footer>
            </Card>
        </>
    )
}