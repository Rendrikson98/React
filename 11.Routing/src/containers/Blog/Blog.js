import React, { Component } from 'react';
// import axios from 'axios';
//import axios from '../../axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render() {
        return (
            <div className='Blog'>
                <header >
                    <nav >
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname: '/newPost',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path='/' exact component={Posts} />
                <Route path='/newPost' component={NewPost} />
            </div>
        );
    }
}

export default Blog;