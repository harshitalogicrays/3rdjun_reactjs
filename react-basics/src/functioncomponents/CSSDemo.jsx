import React from 'react'
import cssmodule from '../app.module.css'
import image1 from '../assets/images/about-image.png'
import { Button, Col, Container, Form, Image, InputGroup, Row } from 'react-bootstrap'
import { BsEnvelopeAtFill, BsLock } from "react-icons/bs";
import { FaPenAlt } from 'react-icons/fa';
import { MyButton, TextBox } from './MyCustomCSSComp';
const CSSDemo = ({size}) => {
    let cssvar = {color:'red',backgroundColor:'yellow',textDecoration:'underline'}
  return (
   <>
        <p style={{color:'red',backgroundColor:'yellow',fontSize:size}}>Inline css</p>

        <div style={cssvar}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam optio consequuntur at, tempora ex illo commodi blanditiis nemo, laudantium sed numquam eveniet mollitia, nisi molestiae incidunt? Cupiditate sint vero accusantium!</div><br/>
        <input type="text" className='form-control'  style={cssvar} />

        <h3 className='App'>CSS File Demo</h3>
        <h1 className={cssmodule.error}>CSS module demo</h1>

        <MyButton>Click Me</MyButton>
        <TextBox type="date"></TextBox>

        {/* <Container>
            <h1> <FaPenAlt/> React Bootstrap Demo</h1>
            <Row>
                <Col xs={3} className='bg-danger'>
                    <Image src={image1} fluid />
                </Col>
                <Col className='bg-info'>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Username</Form.Label>
                            <Form.Control></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>                        
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Text><BsEnvelopeAtFill /></InputGroup.Text>
                                <Form.Control></Form.Control>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>password</Form.Label>
                            <InputGroup>
                            <InputGroup.Text><BsLock/></InputGroup.Text>
                            <Form.Control type="password"></Form.Control>
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>confirm password</Form.Label>
                            <Form.Control type="password"></Form.Control>
                        </Form.Group>
                        <div className='d-grid gap-2'>
                          <Button type="submit" variant='warning'>Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container> */}
   </>
  )
}

export default CSSDemo
