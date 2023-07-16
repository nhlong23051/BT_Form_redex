import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actSearch } from '../action/actiontype';

class Search extends Component {
    handleSearch = (e) => {
        let { value } = e.target
        this.props.handleKey(value)
    }
    render() {
        return (
            <div className='row'>
                <div className='col-md-8'>
                    <input
                        type='text'
                        className='form-control mx-3 my-2'
                        placeholder='search ....'
                        onChange={(event) => this.handleSearch(event)}
                    ></input>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleKey: (keyword) => {
            dispatch(actSearch(keyword))
        }
    }
}

export default connect(null, mapDispatchToProps)(Search)