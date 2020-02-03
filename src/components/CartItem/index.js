import React from "react";
import { bindActionCreators } from 'redux';
import { Row, Col } from "react-grid-system";
import "./style.css";
import * as ProductActions from "../../store/actions/cart";
import { connect } from 'react-redux';

function CartItem({product, removeItemCart, updateQnt}) {
    function incremet(product){
        updateQnt(product.id, product.qnt + 1);
    }
    function decrement(product){
        updateQnt(product.id, product.qnt - 1);
    }
    return (
        <Row>
            <Col md={2}>
                <div className="photo-item" 
                    style={{backgroundImage:`url(${product.photo})`}}></div>
            </Col>
            <Col md={3}>
                <p>{product.name}</p>
                <p>{product.formatPrice}</p>
            </Col>
            <Col md={3}>
                <button type='button' onClick={() => decrement(product)}>-</button>
                <p>{product.qnt}</p>
                <button type='button' onClick={() => incremet(product)}>+</button>
            </Col>
            <Col md={2}>
               <p>subtotal {product.subTotal} </p>
            </Col>
            <Col md={2}>
                <button onClick={() => removeItemCart(product.id)}>
                    Remover
                </button>
            </Col>
        </Row>
    );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductActions, dispatch);

export default connect(null, mapDispatchToProps)(CartItem);