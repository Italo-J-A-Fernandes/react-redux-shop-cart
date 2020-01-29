import React from "react";
import "./style.css"
import { Container, Row, Col } from "react-grid-system";
import { FiShoppingBag } from "react-icons/fi";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Header({itensTotal}) {
    return (
        <>
            <nav>
                <Container>
                    <Row>
                        <Col md={10}>
                        <Link to="/">
                            <h2 className="title-nav">Mandala Shop's</h2>
                        </Link>   
                        </Col>
                        <Col md={2}>
                            <Link to="/cart">
                                <div className="bag-container">
                                    <span className="bag-itens">{itensTotal}</span>
                                    <FiShoppingBag size={24} color="#fff" />   
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    );
}
const mapStateToProps = state => ({
    itensTotal: state.cart.data.reduce((total, prod) => {
        return total + prod.qnt;
    }, 0),
});
export default connect(mapStateToProps)(Header);