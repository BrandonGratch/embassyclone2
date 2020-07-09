import React, { Component } from 'react';
import './History.css'

const timelineImages = [
  require('../images/timeline1.png'),
  require('../images/timeline2.png'),
  require('../images/timeline3.png'),
  require('../images/timeline4.png'),
  require('../images/timeline5.png'),
  require('../images/timeline6.png'),
]

class History extends Component {
  render() {
    return (
      <div className='history-container'>
        <div className='history-header-image' />
        <div className='history-content-container'>
          <h1 className='hisotry-content-container-title'>Our History</h1>
          <div className='history-content-section'>
            <div className='history-content-section-left' style={{background: `url(${timelineImages[0]})`}}></div>
            <div className='history-content-section-middle'></div>
            <div className='history-content-section-right'>
              <h1>1971</h1>
              <p>Giannangelo Brambilla founded Embassy Food and Supply Ltd. as a company to service hotels and restaurants in the Toronto, Ontario area.</p>
            </div>
          </div>
          <div className='history-content-section'>
            <div className='history-content-section-left'>
              <h1>1981</h1>
              <p>Martino Brambilla became owner and President at the age of 17. He changed the name of the business to Embassy Food Specialties Ltd. and shifted the primary focus of the business to flavors.</p>
            </div>
            <div className='history-content-section-middle'></div>
            <div className='history-content-section-right' style={{background: `url(${timelineImages[1]})`}}>
              
            </div>
          </div>
          <div className='history-content-section'>
            <div className='history-content-section-left' style={{background: `url(${timelineImages[2]})`}}></div>
            <div className='history-content-section-middle'></div>
            <div className='history-content-section-right'>
              <h1>1971</h1>
              <p>Giannangelo Brambilla founded Embassy Food and Supply Ltd. as a company to service hotels and restaurants in the Toronto, Ontario area.</p>
            </div>
          </div>
          <div className='history-content-section'>
            <div className='history-content-section-left'>
              <h1>2004</h1>
              <p>Embassy moved into a new custom-deisgned manufacturing facility outside of Toronto, Ontario.</p>
            </div>
            <div className='history-content-section-middle'></div>
            <div className='history-content-section-right' style={{background: `url(${timelineImages[3]})`}}>
            </div>
          </div>
          <div className='history-content-section'>
            <div className='history-content-section-left' style={{background: `url(${timelineImages[4]})`}}></div>
            <div className='history-content-section-middle'></div>
            <div className='history-content-section-right'>
              <h1>2010</h1>
              <p>Embassy expanded internationally into Mexico by exporting technology through a license agreement with Lallemand Mexico.</p>
            </div>
          </div>
          <div className='history-content-section'>
            <div className='history-content-section-left'>
              <h1>2018</h1>
              <p>Embassy changed the business name to Embassy Ingredients Ltd. to more accurately reflect its flavor and bakery capabilities.</p>
            </div>
            <div className='history-content-section-middle-last'></div>
            <div className='history-content-section-right' style={{background: `url(${timelineImages[5]})`}}>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default History;