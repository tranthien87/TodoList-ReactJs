import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keysearch: ''
        }
    }
    
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.changeFilterSearch(this.state.keysearch)
        })
    }
    render() {
        return (
            <div className="form-group text-left my-0">
            <input
              type="text"
              name="keysearch"
              className="form-control"
              placeholder="Tìm kiếm công việc"
              onChange = {this.onChange}
            />
          </div>
        )
    }
}
