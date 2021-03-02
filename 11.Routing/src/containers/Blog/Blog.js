import React, { Component } from 'react';
// import axios from 'axios';
//import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import Post from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost')
})

class Blog extends Component {
    state = {
        auth: true
    }
    render() {
        return (
            <div className='Blog'>
                <header >
                    <nav >
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to='/posts'
                                >Posts</NavLink></li>
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
                <Switch>
                    {this.state.auth ? <Route path='/newPost' component={AsyncNewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    {/*<Redirect from='/' to='/posts' />*/}
                    <Route render={() =>
                        <h1>Page not found</h1>
                    } />
                </Switch>
            </div>
        );
    }
}

export default Blog;