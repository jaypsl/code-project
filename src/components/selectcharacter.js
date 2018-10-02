import React, { Component } from 'react';

import CharacterContainer from './CharacterContainer';

export default class SelectCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = { url: undefined };
    }

    change = (event) => {
        var url = event.target.value;
        this.setState({url: url});
    }

    render() {
        return (
            <div>
                <select name='characters' onChange={this.change} defaultValue="default" >
                    <option disabled value='default'> -- select an option -- </option>
                    {this.props.characters.map((c, index) => <option value={c.url} key={index}>{c.name}</option>)}
                </select>
                {this.state.url && <CharacterContainer url={this.state.url} key={this.state.url}/>}
            </div>
        );
    }
}

