import React from "react";
import "./style.css";
import { formatPrice } from '../../util/format'
import * as ProductActions from "../../store/actions/cart";
import { connect } from "react-redux";

function ProductItem({product, dispatch}) {
    return (
        <div className="product-container">
            <div className="product-photo" style={{backgroundImage:`url(${product.photo})`}}></div>
            <div className="txt-container">
                <span>{product.name}</span>
            </div>
            <div className="txt-container">
                <span>{formatPrice(product.value)}</span>
            </div>
            <div className="btn-add" href="#" onClick={()=> dispatch(ProductActions.addProductCart(product))}>Adicionar</div>
        </div>
    );
}

export default connect()(ProductItem);