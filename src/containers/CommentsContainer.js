import React from 'react';
import CommentForm from '../components/CommentForm';
import Comments from '../components/Comments';

class CommentsContainer extends React.Component {

    render() {
        return (
            <div>

                <CommentForm post={this.props.post}/>
                <Comments comments={this.props.post && this.props.post.comments}/>
                
            </div> // passing Comments component a comments prop of actions associated with the post
        )
    }

}

export default CommentsContainer