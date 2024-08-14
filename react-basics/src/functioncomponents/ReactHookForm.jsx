import React from 'react'
import Image1 from '../assets/images/register.png'
import { Button, Col, Form, Image, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
const ReactHookForm = () => {
    let {register,handleSubmit,  formState: { errors },trigger,getValues}=useForm()
   let addUser=(data)=>{  alert(JSON.stringify(data))  }
 return (  <>
     <h1>React Hook Form</h1> <hr/>
    <Row className='shadow p-3 mt-5'>  <Col xs={4}><Image fluid src={Image1}/> </Col>
        <Col> <Form onSubmit={handleSubmit(addUser)}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control {...register('username',
                            {required:"Username is required",
                            minLength:{value:5,message:'min 5 char'},
                            maxLength:{value:30,message:'max 30 char'}   })}
                        onBlur={()=>trigger('username')}
                        ></Form.Control>
                        {errors.username && <span className="text-danger">{errors.username.message}</span>} </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register('email',
                            {required:{value:true,message:'Email is required'},
                                pattern:{value:/^[\w\.]+\@[\w]+\.[a-zA-Z]{3}$/,message:"Invalid Email"}    })}
                            onBlur={()=>trigger('email')}
                        ></Form.Control>
                         {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" {...register('password',{required:"Password is required",
                            minLength:{value:5,message:'min 5 char'},
                            maxLength:{value:30,message:'max 30 char'}
                        })}  onBlur={()=>trigger('password')}></Form.Control>
                          {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" {...register('cpassword',{required:"Confirm Password is required",
                            validate:(cpwd)=>{
                                let {password}=getValues();
                                return password==cpwd || "password not match"
                            }
                        })} onBlur={()=>trigger('cpassword')}></Form.Control>
                        {errors.cpassword && <span className="text-danger">{errors.cpassword.message}</span>}
                    </Form.Group>
                    <Button type="submit">Register</Button>
            </Form>
        </Col>
    </Row>
    </>
  )
}

export default ReactHookForm
