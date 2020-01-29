import React from "react";
import { bindActionCreators } from 'redux';
import { Row, Col } from "react-grid-system";
import { formatPrice } from '../../util/format'
import "./style.css";
import * as ProductActions from "../../store/actions/cart";
import { connect } from 'react-redux';

function CartItem({product, removeItemCart}) {
    return (
        <Row>
            <Col md={2}>
                <div className="photo-item" 
                    style={{backgroundImage:`url(${product.photo})`}}></div>
            </Col>
            <Col md={3}>
                <p>{product.name}</p>
                <p>{formatPrice(product.value)}</p>
            </Col>
            <Col md={3}>
               <p>{product.qnt}</p>
            </Col>
            <Col md={2}>
               <p>subtotal</p>
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