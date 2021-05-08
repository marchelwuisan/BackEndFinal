import {React, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'

const UserDetail = ({jobs}) => {
    const {id} = useParams()
    const detail = jobs[id];

useEffect(() => 
window.scrollTo(0,0)
,[])

    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", width: "100%", height: window.innerHeight-55}}>
                <div style={{width: "100%", flex: "1 0 1px"}}></div>
                <div style={{width: "100%", flex: "4 0 1px", margin: '3rem'}}>
                <Button variant="secondary" href={detail.linkUrl}>Go to Job Page</Button>
                    <div style={{display: 'flex', flexDirection: "column", width: "100%", height: "100%"}}>
                        {/* <div style={{flex: '0.125 0 1rem', display: "flex"}}>
                            <Button style={{flex: '0.37 1 0.37rem',}}variant="secondary" as={Link} to={`/`}>Back to Home</Button>
                            <div style={{flex:'0.37 1 0.37rem'}}></div>
                            <Button style={{flex: '0.37 1 0.37rem',}}variant="secondary" href={detail.url}>Go to Job Page</Button>
                        </div> */}
                        <div style={{flex: '1 0 1rem', padding: '0.37rem'}}>
                            <Card style={{height: '100%'}}>
                                <Card.Header style={{display :"flex"}}>
                                        <div style={{flex:"1 0 1rem", textAlign:"left"}}><b>{detail.title}</b></div>
                                        <div style={{flex:"1 0 1rem", textAlign:"right"}}>{detail.type} / {detail.location}</div>
                                    </Card.Header>
                                <Card.Body style={{padding: "0"}}>
                                    <div style={{display: "flex", width: "100%", height: "100%", flexDirection:"column"}}>
                                        <div style={{ textAlign:"center", padding:10}}><b style={{fontSize:40}}>{detail.company}</b></div>
                                        <div style={{width: "100%", flex: "1 0 1rem", padding: "1rem", display: "flex", flexDirection: "column"}}>
                                            <div style={{height: "auto", marginBottom: "3rem"}}>
                                                <h5 style={{whiteSpace: 'pre-line'}}>{detail.description}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div style={{width: "100%", flex: "1 0 1px"}}></div>
            </div> 
        </div>
    )
}

export default UserDetail
