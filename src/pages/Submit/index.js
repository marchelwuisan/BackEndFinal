import React, { useState, useEffect } from "react";
import { Button, Form, Container, Row, Col, } from "react-bootstrap";
import Inputs from "../../components/atoms/Input";
import firebase from "../../config/firebase";
import Card from '../../components/molecules/Cards';

const Submit = ({apiData}) => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const resetForm = () => {
    setTitle("");
    setCompany("");
    setType("");
    setLocation("");
    setDescription("");
    setLinkUrl("");
  };

  const [jobs, setJobs] = useState([]);

  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    firebase
      .database()
      .ref("jobs")
      .on("value", (res) => {
        if (res.val()) {
          const rawData = res.val();
          const jobsArr = [];
          Object.keys(rawData).map((item) => {
            return jobsArr.push({
              id: item,
              ...rawData[item],
            });
          });
          setJobs(jobsArr);
        }
      });
  }, []);

  const onSubmit = () => {
    const data = {
      title: title,
      company: company,
      type: type,
      location: location,
      description: description,
      linkUrl: linkUrl,
    };
    console.log(data);
    
    firebase.database().ref("jobs").push(data);
    
    resetForm();
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Container style={{ flex: "1 0 1px" }} />
        <Container style={{ flex: "4 0 1px" }}>
          <br />
          <h3>Submit</h3>
          <br />
          <Form>
            <Inputs
              inputTitle="Title"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Inputs
              inputTitle="Company"
              placeholder="Enter company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <Inputs
              inputTitle="Type"
              placeholder="Enter type of job"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
            <Inputs
              inputTitle="Location"
              placeholder="Enter location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Form.Group>
        <Form.Label>Description</Form.Label>
        <br/>
        <Form.Control placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={15} />
      </Form.Group>
            
            <Inputs
              inputTitle="Link"
              placeholder="Enter link"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              Submit
            </Button>
          </Form>
        </Container>
        <Container style={{ flex: "1 0 1px" }} />
      </div>
      <br />
      <div>
        <Container style={{ flex: "1 0 1px" }} />
        {/* <div>
            <Container>
                <Row>
                    <Col>
                            <div style={{
                                display: "flex", 
                                flexDirection: "row",
                                height: '4rem',
                                width: '100%',
                            }}>
                                <div style={{width: "100%", flex: "3 0 1rem", margin: '0.25rem'}}>
                                    <Form.Control style={{width: '100%', height: '100%'}} type="text" placeholder="Search" onChange={(e) => {
                                        setKeyword(e.target.value)
                                        
                                    }} value={keyword} />
                                </div>
                            </div>
                    </Col>
                </Row>
                {
                    jobs.map((el) => {
                            if(keyword.length > 0) {
                                return <Row key={el.id}>
                                    {el.title.toLowerCase().includes(keyword.toLowerCase()) ? <Col><Card title={el.title} subtitle={el.company} text={el.location} link="More Detail" idx={el.id}/></Col> : null}
                                </Row>
                            } else {
                                return <Row key={el.id}>
                                    <Col><Card title={el.title} subtitle={el.company} text={el.location} link="More Detail" idx={el.id}/></Col>
                                </Row>
                            }
                        }
                    )
                } 
            </Container>
        </div> */}
        {/* <Container style={{ flex: "4 0 1px" }}>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Name</th>
                <th style={{ width: "70%" }}>Detail</th>
                <th style={{ width: "10%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {names.map((item) => {
                return (
                  <tr key={item.id}>
                    <td style={{ width: "20%" }}>{item.name}</td>
                    <td style={{ width: "70%" }}>{item.detail}</td>
                    <td style={{ width: "10%" }}>
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => onUpdateData(item)}
                      >
                        Update
                      </button>
                      <button type="button" class="btn btn-danger" onClick={() => onDeleteData(item)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container> */}
        <Container style={{ flex: "1 0 1px" }} />
      </div>
    </div>
  );
};

export default Submit;
