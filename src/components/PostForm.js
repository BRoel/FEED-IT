import React from 'react'
import {connect} from 'react-redux'
import {addPost} from '../actions/addPost'

class PostForm extends React.Component {

    state = {
        title: '',
        body: ''
    }
    //local state

    handleChange = (e) => { //update state
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => { //on form submit state sent to addPost action
        e.preventDefault()
        this.props.addPost(this.state) //dispatch to reducer
        this.setState({
            title: '', //clears form after submit
            body: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Post Title: </label>
                    <input type='text' placeholder='Title' value={this.state.title} name="title" onChange={this.handleChange}/>
                    <br></br>
                    <label>Post Content: </label>
                    <textarea type='text' placeholder='Content' value={this.state.body} name="body" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}


export default connect(null, {addPost})(PostForm) //allows for a call to this.props.addPost