import React from "react";
import Layout from "../../components/Layout";
import { connect } from "react-redux";
import { Row, Col } from "react-grid-system";
import CartItem from "../../components/CartItem";
import Separetor from "../../components/Separetor";
import * as ActionsCart from "../../store/actions/cart"

function CartList({products}){
    console.log(products) 
    return (
        <Layout>
            <Row className="mg-tp-12">
                <Col className="fn-serif">
                    <h2 className="title-page">Carrinho</h2>
                </Col>
            </Row>
            <Separetor />
            {products.map(product => (
                <CartItem key={product.id} product={product} />
            ))}
            <Separetor />
            <Row>
                <Col>
                    <p>Total: R$ {ActionsCart.valorTotoal(products)}</p>
                </Col>
            </Row>
        </Layout>
    );
}

const mapStateToProps = state => ({
    products: state.cart.data,
});

export default connect(mapStateToProps)(CartList);