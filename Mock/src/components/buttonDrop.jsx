import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {information} from  '../Data/JSONinfo.js';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

rating = () => {
    this.props.sortRated()
}
 views = () => {
    this.props.sortViews()
}


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {

    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          {this.props.name}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem
          onClick={this.rating}
          >
          Top Rated
          </DropdownItem>
          <DropdownItem
          onClick={this.views}
          >
              Most Popular</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default connect(null,actions)(Example);