import React from 'react';
import { connect } from 'react-redux';
import { toggleEditing } from './../actions/titleActions';

const TitleDisplay = (props)=> {
  console.log('TitleDisplay.js ln:6 props:', props);
    const handleToggleEditing = () => {
      props.toggleEditing();
    }

    return(<h2>
        {props.title}{' '}
        <i
          className="far fa-edit"
          onClick={handleToggleEditing}
        />
    </h2>);
}

const mapStateToProps = (state)=> {
  
  return({
    title: state.titleReducer.title
  });
}
//This is the destructured alternative. 
export default connect(mapStateToProps, { toggleEditing })(TitleDisplay);

//Raw pre-destructuring alternative 
// const mapActionsToProps = {
//   toggleEditing: toggleEditing
// }; 
// export default connect (mapStateToProps, mapActionsToProps)(TitleDisplay);
