import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      number: '',
      range: '',
      textarea: '',
      select: '',
      submit: '',
    }
    this.getInput = this.getInput.bind(this);
    this.sendValue = this.sendValue.bind(this);
  }


  getInput(event) {

    console.log(event.target);
    if(event.target.name === 'text') {
      this.setState({[event.target.name]: event.target.value});
    }
    else if(event.target.name === 'number') {
      this.setState({[event.target.name]: event.target.value});
    }
    else if(event.target.name === 'range') {
      this.setState({[event.target.name]: event.target.value});
    }
    else if(event.target.name === 'textarea') {
      this.setState({[event.target.name]: event.target.value});
    }
    else if(event.target.name === 'select') {
      this.setState({[event.target.name]: event.target.value});
    }
    else if(event.target.name === 'submit') {
      event.preventDefault();
      this.setState({[event.target.name]: "event.preventDefault()"});
    }
  }

  sendValue(event) {
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form>
          <div>
            <p>{`input[text]`}</p>
            <input onChange={this.getInput} name = "text" type="text"/>
          </div>
          <div>
            <p>{`input[number]`}</p>
            <input onChange={this.getInput} name = "number" type="number"/>
          </div>
          <div>
            <p>{`input[range]`}</p>
            <input onChange={this.getInput} name = "range" type="range"/>
          </div>
          <div>
            <p>{`input[textarea]`}</p>
            <textarea onChange={this.getInput} name = "textarea"/>
          </div>
          <div>
            <p>{`input[select]`}</p>
            <select onChange={this.getInput} name="select">
              <option defaultValue="first">First Value</option>
              <option defaultValue="second">Second Value</option>
              <option defaultValue="third">Third Value</option>
            </select>
          </div>
          <div>
            <p>{`input[submit]`}</p>
            <input onClick={this.getInput} name = "submit" type="submit"/>
          </div>
        </form>
        <table style={{ textAlign: "center", width: "100%",}}>
          <tbody >
            <tr>
              <td >{`input[text]`}</td>
              <td>{`input[number]`}</td>
              <td>{`input[range]`}</td>
              <td>{`input[textarea]`}</td>
              <td>{`input[select]`}</td>
              <td>{`input[submit]`}</td>
            </tr>
            <tr>
              <td>{this.state.text}</td>
              <td>{this.state.number}</td>
              <td>{this.state.range}</td>
              <td>{this.state.textarea}</td>
              <td>{this.state.select}</td>
              <td>{this.state.submit}</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}


//<input/>
export default App;
