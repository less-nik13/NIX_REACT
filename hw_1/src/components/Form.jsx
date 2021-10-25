import React, { Component } from 'react';
import SubmitButton from "./SubmitButton";
import Input from "./Input";


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.name || !this.state.email || !this.state.password) {
            this.setState({
                ...this.state, message: "All fields are required."
            })
            return;
        }

        if(!localStorage.getItem('userData')) {
            localStorage.setItem('userData', JSON.stringify(this.state));
        } else {
            localStorage.clear();
            localStorage.setItem('userData', JSON.stringify(this.state));
        }

        this.setState({
            name: "",
            email: "",
            password: "",
            message: "User created successfully."
        });
    }

    render() {
        return (
            <form className="form">
                <h2>Task 1: Register</h2>
                {localStorage.getItem("userData") && <h3 className="form__message">{this.state.message}</h3>}
                <Input name="name" type="text" handleChange={this.handleChange} value={this.state.name}
                       maxLength="20"/>
                <Input name="email" type="email" handleChange={this.handleChange} value={this.state.email}
                       maxLength="60"/>
                <Input name="password" type="password" handleChange={this.handleChange} value={this.state.password}
                       maxLength="20"/>
                <SubmitButton handleSubmit={this.handleSubmit}/>
            </form>
        );
    }
}

export default Form;