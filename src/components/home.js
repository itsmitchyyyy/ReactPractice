import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "Change Link"
        };
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 1
        });
    }

    onChangeName(){
        this.props.changeLink(this.state.homeLink)
    }

    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }

    render(){
        return(
            <div>
                <p>In a new Component</p>
                <p>Hi  {this.props.name} Your age {this.state.age} </p>
                <p>Status: {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-secondary">Greet</button>
                <hr/>
                <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)}/>
                <button onClick={this.onChangeName.bind(this)} className="btn btn-danger">Change Link</button>
            </div>
        );
    }
}

Home.propTypes = {
 name: PropTypes.string,
 initialAge: PropTypes.number,
 greet: PropTypes.func,
 initialLink: PropTypes.string
};