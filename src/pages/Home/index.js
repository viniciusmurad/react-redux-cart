import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-asics-gel-flux-5-a-masculino/72/D18-2439-172/D18-2439-172_zoom1.jpg"
                    alt="Shoes"
                />
                <strong>Shoes</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />3
                    </div>
                    <span>ADD TO CART</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-asics-gel-flux-5-a-masculino/72/D18-2439-172/D18-2439-172_zoom1.jpg"
                    alt="Shoes"
                />
                <strong>Shoes</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />3
                    </div>
                    <span>ADD TO CART</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-asics-gel-flux-5-a-masculino/72/D18-2439-172/D18-2439-172_zoom1.jpg"
                    alt="Shoes"
                />
                <strong>Shoes</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />3
                    </div>
                    <span>ADD TO CART</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-asics-gel-flux-5-a-masculino/72/D18-2439-172/D18-2439-172_zoom1.jpg"
                    alt="Shoes"
                />
                <strong>Shoes</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />3
                    </div>
                    <span>ADD TO CART</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-asics-gel-flux-5-a-masculino/72/D18-2439-172/D18-2439-172_zoom1.jpg"
                    alt="Shoes"
                />
                <strong>Shoes</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />3
                    </div>
                    <span>ADD TO CART</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-asics-gel-flux-5-a-masculino/72/D18-2439-172/D18-2439-172_zoom1.jpg"
                    alt="Shoes"
                />
                <strong>Shoes</strong>
                <span>R$129,90</span>
                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />3
                    </div>
                    <span>ADD TO CART</span>
                </button>
            </li>
        </ProductList>
    );
}
