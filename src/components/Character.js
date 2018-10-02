import React, { Component } from 'react';

class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    formatted(d) {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let date = new Date(d);
        return days[date.getUTCDay()] + ", " + monthNames[date.getUTCMonth()] + " " + date.getUTCDate() + " " + date.getUTCFullYear();
    }

    render() {
        return (
            <div className="character">
            <table><tbody>
                <tr>
                    <th>Title</th>
                    <th>Release Date</th>
                </tr>
                {this.props.films.map((f, index) => {
                    return <tr key={index}>
                        <td>{f.title}</td>
                        <td>{this.formatted(f.release_date)}</td>
                    </tr>
                })}
                </tbody>
            </table>
            </div>
        );
    }
}

export default Character;