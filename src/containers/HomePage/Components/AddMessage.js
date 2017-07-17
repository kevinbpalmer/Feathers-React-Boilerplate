import React, {Component} from 'react';
import {Field} from 'redux-form';
// form ui
import {TextField} from 'redux-form-material-ui';

// form styles
const styles = {
  errorStyle: {
    color: '#B21212'
  },
  underlineStyle: {
    borderColor: '#0971B2'
  },
  floatingLabelStyle: {
    color: '#808080'
  },
  floatingLabelFocusStyle: {
    color: '#0971B2'
  }
};

class AddMessage extends Component {
  render() {
    return (
      <div>
        <div className='container-fluid profile-row'>
          <div className="col-6">
            <Field floatingLabelText='Your Message' hintText='Send a message' name='message' component={TextField} errorStyle={styles.errorStyle} underlineFocusStyle={styles.underlineStyle} floatingLabelStyle={styles.floatingLabelStyle}/>
          </div>

          <div className="col-6">
          </div>
        </div>
      </div>
    );
  }
}

export default AddMessage
