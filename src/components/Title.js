import React from 'react';

import { connect } from 'react-redux';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  // console.log('Title.js ln:9 Title=(props)', props);
  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay />: 
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('Title.js ln:22 mapStateToProps state:', state);
  return({
    appName: state.titleReducer.appName,
    editing: state.titleReducer.editing
  });
}

export default connect(mapStateToProps)(Title);
// 1. mapStateToProps: a function allows us to inject state values directly into a component props. this fuction gets the current state and returns an objext atht is added to the compnents props. 

// 2. mapActionsToProps: an object used to inject actions into a components props AND automatically dispatches those action when excetuted.
