import React from "react";
import { Row, Col } from "react-grid-system";
import "./style.css";
import * as ProductActions from "../../store/actions/cart";
import { connect } from 'react-redux';

function CartItem({product, dispatch}) {
    return (
        <Row>
            <Col md={2}>
                <div className="photo-item" 
                    style={{backgroundImage:`url(${product.photo})`}}></div>
            </Col>
            <Col md={5}>
                <p>{product.name}</p>
                <p>R$ {product.value}</p>
            </Col>
            <Col md={3}>
               <p>{product.qnt}</p>
            </Col>
            <Col md={2}>
                <button onClick={() => dispatch(ProductActions.removeItemCart(product))}>
                    Remover
                </button>
            </Col>
        </Row>
    );
}

export default connect()(CartItem);