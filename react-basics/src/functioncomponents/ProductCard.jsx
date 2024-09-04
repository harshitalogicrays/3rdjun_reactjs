import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const ProductCard = ({product}) => {
  return (
    <Col xs={3} className='mb-3'>
    <Card>
        <Card.Img src={product.images[0]}  variant="top" height={200}/>
        <Card.Body>
            <p>{product.category}<br/>
            {product.title}<br/>
            ${product.price}<br/>
            Available: {product.stock}<br/></p>
            <Button type="button"  >
                Add to Cart
            </Button>           
        </Card.Body>
    </Card>
    </Col>
  )
}

export default ProductCard
