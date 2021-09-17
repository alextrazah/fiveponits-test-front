import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { createPoll } from '../store/actions';

class CreatePoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      sujet:'',
      options: ['oui', 'non'],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addAnswer() {
    this.setState({ options: [...this.state.options, ''] });
  }

  handleAnswer(e, index) {
    const options = [...this.state.options];
    options[index] = e.target.value;
    this.setState({ options });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPoll(this.state);
  }

  render() {
    const options = this.state.options.map((option, i) => (
      <Fragment key={i}>
        <label className="form-label">option</label>
        <input
          className="form-input"
          type="text"
          value={options}
          key={i}
          onChange={e => this.handleAnswer(e, i)}
        />
      </Fragment>
    ));

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-label" htmlFor="question">
          Titre de vote
        </label>
        <input
          className="form-input"
          type="text"
          name="question"
          value={this.state.question}
          onChange={this.handleChange}
        />

<label className="form-label" htmlFor="question">
          Sujet de vote
        </label>
        <input
          className="form-input"
          type="text"
          name="sujet"
          value={this.state.sujet}
          onChange={this.handleChange}
        />
        <div className="buttons_center">
         
          <button className="button" type="submit">
            Submit
          </button>
          
        
        </div>
        <label className="form-label" htmlFor="question">
          Les réponses possibles seront : 
        </label>
        <input
        style={{width:"50px"}}
         disabled
          type="text"
          name="question"
          value="oui"
         
        />
        <label className="form-label" htmlFor="question">
          ou
        </label>

        <input
        style={{width:"50px"}}
         disabled
          type="text"
          name="question"
          value="non"
         
        />
      </form>
    );
  }
}

export default connect(() => ({}), { createPoll })(CreatePoll);
