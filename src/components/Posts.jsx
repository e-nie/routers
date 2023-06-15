import React from 'react';
import '../styles/Posts.css';

const Posts = (props) => {
    return (
        <div className = 'posts'>
            <div className = 'posts-content'>
                <strong>{ props.post.id }. { props.post.title }</strong>
                <div style = { { textAlign: 'start' } }>
                    { props.post.body }
                </div>
            </div>

            <div className = 'posts-button'>
                <button>
                    Button
                </button>
            </div>
        </div>
    );
};

export default Posts;
