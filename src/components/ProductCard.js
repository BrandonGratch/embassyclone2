import React, { Component } from 'react';
import './ProductCard.css';
import Chocolate from '../images/Chocolate.png'
import { GlobalContext } from '../context/GlobalState';
import HomeBanner from '../images/home-banner-1.jpg'

const images = {
  'Cream & Pudding Cakes': require("../images/Chocolate.png")
}

export class ProductCard extends Component {
  constructor(props) {
      super(props)
      // this.state = {
      //   image: require(this.props.element.image)
      // }
  }

  render() {
    const { element, openModal } = this.props
    return (
      <div className='product-card-container' onClick={() => openModal(element)}>
        <div className='product-card-margin'>
            <div className='product-card-img-container'>
                <img src={images[element.title]} />
            </div>
            <div className='product-card-text'>
              <h2 className='product-card-name'>{element.title}</h2>
              <h3 className='product-card-category1'>{element.category1}</h3>
              <h3 className='product-card-category2'>{element.category2}</h3>
            </div>
        </div>
      </div>
    )
  }
}