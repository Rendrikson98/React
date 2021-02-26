import React, { Component } from 'react';
// import axios from 'axios';
//import axios from '../../axios';
import { Route, NavLink, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import Post from './FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div className='Blog'>
                <header >
                    <nav >
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to='/'
                                >Home</NavLink></li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: '/newPost',
                                        hash: '#submit',
                                        search: '?quick-submit=true'
                                    }}
                                >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact component={Posts} />
                <Route path='/newPost' component={NewPost} />
                <Route path='/:id' component={Post} />
            </div>
        );
    }
}

export default Blog;