import React, { Component } from 'react';
import './styles/App.css';
import './index.css';
import Header from './components/header.jsx'
import troolr from './assets/troolr-icon.png'
import HeaderNav from './components/headerNav.jsx'
import Section from './components/topSection.jsx'
import List from './containers/list.jsx'
import {globe} from 'react-icons-kit/iconic/globe'
import {threeUp} from 'react-icons-kit/iconic/threeUp'
import { Container, Row, Col } from 'reactstrap';
import {information} from  './Data/JSONinfo.js';

class App extends Component {
  
  render() {
    return (
<div>
<div className="row">
<div class="column column-12">
 <Header
 image={troolr}
 alt={''}
  />
  </div>
</div>
<div >
<div class="column column-12">
<HeaderNav className="item1"
options = {[' Locations', 'Categories']}
icons={[threeUp,globe]}
/>
</div>
</div>
<div className="column column-12">
<Section className="item2"
results = {information.length}
/>
</div>
<div className=" column column-12 list">
<List />
  </div>
  </div>


    );
  }
}

export default App;
