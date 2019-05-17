    
import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
    constructor() {
        super();
        this.state = {
          name: '',
          age: '',
          height: ''
      
        };
      }
    
      addSmurf = event => {
        event.preventDefault();
        const newSmurf = {
          name: this.state.name,
          age: this.state.age,
          height: this.state.height
        }
        
        this.props.addSmurf(newSmurf);
        
        this.setState({
          name: '',
          age: '',
          height: ''
        })
      }
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
    
      render() {
        return (
          <div className="SmurfForm">
            <form onSubmit={this.addSmurf}>
              <input
                name="name"
                value={this.state.name}
                type='text'
                placeholder="name"
                onChange={this.handleChange}
              />
              <input
                name="age"
                value={this.state.age}
                type='number'
                placeholder="age"
                onChange={this.handleChange}
              />
              <input
                name="height"
                value={this.state.height}
                type='text'
                placeholder="height"
                onChange={this.handleChange}
              />
              <button type="submit">Add Smurf</button>
            </form>
        </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        addingSmurf: state.addingSmurf,
        error: state.error
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);