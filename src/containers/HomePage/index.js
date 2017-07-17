import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import Validator from 'validatorjs';

// components
import AddMessage from './Components/AddMessage';

// import the feathers client
import feathers from 'config/feathers';

// actions
import {getMessages} from 'actions/Messages';

// stylesheet
import './style.styl';

// validator setup

const rules = {
  message: 'required|max:400'
};

const customErrorMessages = {
  'required.message': 'Please tell us your first name'
};

const validate = data => {
  const validator = new Validator(data, rules, customErrorMessages);
  validator.passes();
  return validator.errors.all();
};
// validator end

class HomePage extends Component {
  componentWillMount() {
    feathers.io.authenticate({
      email: 'kevin.bradley.palmer@gmail.com',
      password: 'test123',
      strategy: 'local'
    }).then(response => {
      console.log('Authenticated!', response);
      return feathers.io.passport.verifyJWT(response.accessToken);
    }).then(payload => {
      console.log('JWT Payload', payload);
      return feathers.io.service('users').get(payload.userId);
    }).then(user => {
      feathers.io.set('user', user);
      console.log('USER in App.js: ', user);
      // if authenticated, get data
      this.getData();
    }).catch((error) => {
      console.error('Error authenticating!', error);
    });
  }

  getData() {
    const messages = feathers.io.service('/messages');

    messages.find().then(messages => {
      this.props.dispatch(getMessages(messages));
    })
  }

  sendMessage(values) {
    const messages = feathers.io.service('/messages');
    console.log(values);

    messages.create({name: 'Kevin', text: values.message}).then(res => {
      console.log('It worked!', res);
      this.props.reset();
    }).catch(err => {
      console.log(err);
    });
  }

  componentDidMount() {
 //    feathers.io.logout().then(() => {
 //   console.log('logged out');
 // })

    const messages = feathers.io.service('/messages');
    messages.on('created', (message) => {
      console.log('New Message!');
      this.getData();
    });
  }

  componentDidUpdate() {
    console.log('UPDATE:', this.props.messages.data);
  }

  renderMessages() {
    return (this.props.messages.data.map(message => <div key={message._id} className='single-message'>
      <p>Name: {message.name}</p>
      <p>Message Text: {message.text}</p>
    </div>));
  }

  render() {
    const {handleSubmit, pristine, submitting} = this.props;

    if (this.props.messages.data) {
      return (
        <div className='container'>
          <div className="messages-container">
            <h1>Messages</h1>
            {this.renderMessages()}
          </div>
          <div className="messages-container">
            <h1>Send a message</h1>
            <form className='profile-form' onSubmit={handleSubmit(this.sendMessage.bind(this))}>
              <AddMessage/>
              <button style={{
                marginLeft: 0
              }} className='btn btn-lg btn-custom' type='submit' disabled={pristine || submitting}>Send</button>
            </form>
          </div>
        </div>
      )
    }

    return (
      <div>
        <h1>HomePage component</h1>
      </div>
    );
  }
}

HomePage = reduxForm({form: 'profileForm', enableReinitialize: true, reinitialized: true, validate})(HomePage);

function mapStateToProps(store) {
  return {messages: store.Messages.data};
}

export default withRouter(connect(mapStateToProps)(HomePage));
