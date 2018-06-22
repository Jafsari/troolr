import React, {Component } from 'react';
import '../styles/list.css';
import {information} from  '../Data/JSONinfo.js';
import * as actions from '../actions'
import { connect } from 'react-redux';
import {stars} from '../helpers';
import ListDetail from '../components/list-detail.jsx';


class List extends Component{
render(){
    return (
        <ul className="container">
            <li>
            <ListDetail 
            status={this.props.status.Rated}
            viewers={this.props.status.Viewers}
            />
            </li>
        </ul>

    )
}
}

const mapStateToProps = (state) => { 
    return { 
      status: state.filter
      };
  };

export default connect(mapStateToProps,actions)(List);