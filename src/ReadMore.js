import React, { Component } from 'react'

// React Bootstrap 
import {
    Button
} from 'react-bootstrap';

class ReadMore extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fav: 0,
            favText: 'Favorite'
        }
    }

    handleClick = () => {
        if(this.state.fav === 0) {
            this.setState({
                fav: 1,
                favText: 'Unfavorite'
            })
        } else {
            this.setState({
                fav: 0,
                favText: 'Favorite'
            })
        }
    }

    render() { 
        return (
            <Button variant="primary" onClick={this.handleClick}>{this.state.favText}</Button>
        )
    }

}

export default ReadMore