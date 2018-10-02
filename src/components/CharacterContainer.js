import React, { Component } from 'react';
//import fetch from 'fetch';
 
import Character from './Character';

class CharacterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { films: [], error: undefined };
    }
    componentDidMount() {
        fetch(this.props.url, {
            method: 'GET',
        }).then(d => d.json()).then(data => {
            console.log(data);
            return data.films;
        }).then(films => {
            var ps = films.map(film => {
                return fetch(film, {method: 'GET'}).then(d => d.json());
            });
            return Promise.all(ps);
        }).then(films => {
            this.setState({films: films})
            console.log(films);
        }).catch(err => {
            this.setState({error: "Error"});
        })
    }
    render() {
        if (this.state.error) {
            return <div>Error! {this.state.error}</div>
        } else {
            return (
                <div>
                    <Character films={this.state.films} />
                    {/* {this.state.films.map((f, index) => <div key={index}>{f.title} {f.release_date}</div>)} */}
                </div>
            );
        }
    }
}

export default CharacterContainer;