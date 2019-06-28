import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts : []
    }
    //Calling api
    componentDidMount(){ 

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( response => {
            this.setState({ posts:response.data });
        });
    }
    render () {
        //Set data for to show as list
        const posts = this.state.posts.map( post => {
            return (<Post title={post.title} 
                          key={post.id}
                          info={post.body}
                   />);
        })
        return (
            <div>
                <section className="Posts">77777777777777777
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;