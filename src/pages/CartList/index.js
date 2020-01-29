import React from "react";
import Layout from "../../components/Layout";
import { formatPrice } from '../../util/format';
import { connect } from "react-redux";
import { Row, Col } from "react-grid-system";
import CartItem from "../../components/CartItem";
import Separetor from "../../components/Separetor";

function CartList({products, valorTotoal}){
    console.log(products)
    return (
        <Layout>
            <Row className="mg-tp-12">
                <Col className="fn-serif">
                    <h2 className="title-page">Carrinho</h2>
                </Col>
            </Row>
            <Separetor />
                {products.length === 0 && <div>Carrinho Vazio!</div>}
                
                {products.length > 0 && products.map(product => (
                    <CartItem key={product.id} product={product} />
                ))}
            <Separetor />
            <Row>
                <Col>
                    <p>Total: {formatPrice(valorTotoal)}</p>
                </Col>
            </Row>
        </Layout>
    );
}

const mapStateToProps = state => ({
    products: state.cart.data,
    valorTotoal: state.cart.data.reduce((acc,cur) => {
        return parseFloat((acc + cur.value * cur.qnt).toFixed(2))
      }, 0),
});

export default connect(mapStateToProps)(CartList);