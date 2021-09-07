import React from 'react';
import { connect } from 'react-redux';

import { addMember } from './../actions/dragonActions';

import DragonMember from './DragonMember';

class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ ...this.state, newMember: e.target.value });
  };

  handleClick = ()=> {
    // console.log('DragonLIst.js ln:18 handleClick Fired');
    this.props.addMember(this.state.newMember);
  }

  render() {
    // console.log('DragonList.js ln:23 this.props:', this.props);
    return (
      <div>
        <div className="friends-list">
          {this.props.members.map((member, index) => (
            <DragonMember key={index} member={member}/>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  // console.log('DragonList.js ln:43 state:', state);
  return {
    members:state.dragonReducer.members
  }
}

export default connect(mapStateToProps, { addMember })(DragonList);
