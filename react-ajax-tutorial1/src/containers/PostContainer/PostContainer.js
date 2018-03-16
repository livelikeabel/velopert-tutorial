import React, {Component} from 'react';
import { PostWrapper, Navigate, Post } from '../../components';
import * as service from '../../services/post';

class PostContainer extends Component {

    constructor(props) {
        super();
        // initialize component state
        this.state = {
            postId: 1,
            fetching: false, // tells whether the request is waiting for response or not
            post: {
                title: null,
                body: null
            },
            comments: []
        };
    }

    // 컴포넌트가 만들어 지고 첫 렌더링을 다 마친 후 실행되는 메소드
    componentDidMount() {
        this.fetchPostInfo(1);
    }

    fetchPostInfo = async (postId) => {

        this.setState({
            fetching: true //requesting..
        });

        // wait for two promises
        const info = await Promise.all([
            service.getPost(postId),
            service.getComments(postId)
        ]);
        console.log(info)
        // Object destructuring Syntax
        // takes out required values and create references to them
        const {title, body} = info[0].data;

        const comments = info[1].data;

        this.setState({
            postId,
            post: {
                title,
                body
            },
            comments,
            fetching: false // done!
        });

    }

    render() {
        const {postId, fetching, post, comments} = this.state;

        return(
            <PostWrapper>
                <Navigate
                    postId={postId}
                    disabled={fetching}
                />
                <Post
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;
