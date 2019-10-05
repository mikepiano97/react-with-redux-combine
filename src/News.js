import React, { Component } from 'react';
import {connect} from 'react-redux';

class News extends Component {
    render() {
        return (
            <div>
                <h2>This is News Component</h2>
                <button onClick={()=>this.props.changeEditStt()}>Click toi di!</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatusReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeEditStt: () => {
            dispatch({
                type: 'CHANGE_EDIT_STATUS'
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);