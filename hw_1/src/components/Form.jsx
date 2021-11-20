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
        const name = event.target.name;
        this.setState({
            ...this.state, [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const { name, email, password } = this.state;
        const userData = { name, email, password };

        if(!name || !email || !password) {
            this.setState({
                ...this.state, message: "All fields are required."
            });
            return;
        }

        localStorage.setItem('userData', JSON.stringify(userData));

        this.setState({
            name: "",
            email: "",
            password: "",
            message: "User created successfully."
        });
    }

    render() {
        const {message, name, email, password} = this.state;

        return (
            <form className="form">
                <h2>Task 1: Register</h2>
                {message && <h3 className="form__message">{message}</h3>}
                <Input name="name" type="text" handleChange={this.handleChange} value={name}
                       maxLength="20"/>
                <Input name="email" type="email" handleChange={this.handleChange} value={email}
                       maxLength="60"/>
                <Input name="password" type="password" handleChange={this.handleChange} value={password}
                       maxLength="20"/>
                <SubmitButton handleSubmit={this.handleSubmit}/>
            </form>
        );
    }
}

export default Form;