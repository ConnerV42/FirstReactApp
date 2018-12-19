import React, { Component } from 'react';
import "./Pet.css";

class Pet extends Component { // Every component will extend this
    render() {
        return (
            <div className="card">
                <h2 className="name">Jax</h2>
                <img src="https://github.com/connerv42/Photos/raw/master/20161008_153544.jpg"
                    alt="moxie my cat" />
                <h5 style={{ fontSize: '2em', margin: '2px' }}>Hobbies:</h5>
            </div>
        )
    }
}

export default Pet;