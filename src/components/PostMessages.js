import React,{useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/postMessage'

function PostMessages(props) {

    useEffect(() => {
        props.fetchAllPostMessages()
    }, [])

    return (
        <div>
            from PostMessages
        </div>
    )
}

const mapStateToProps = state => ({
    postMessageList: state.postMessage.list
})

const mapActionToProps = {
    fetchAllPostMessages : actions.fetchAll
}

//props.fetchAllPostMessages

export default connect(mapStateToProps,mapActionToProps)(PostMessages);


