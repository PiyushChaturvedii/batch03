import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Route, NavLink, Switch } from 'react-router-dom';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

class Blog extends Component {
    componentDidMount() {
        // console.log(this.props);
    }

    render() {
        const Home = () => {
            <h1>Home </h1>
        }


        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                            >Posts</NavLink></li>
                            <li><NavLink to={
                                {
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }
                            }>New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                {/* <Route path ="/" exact render={()=><h1>Home</h1>}/>
                <Route path ="/" render={()=><h1>Home 2</h1>}/> */}
                <Switch>
                <Route path='/new-post' component={NewPost}/>
                <Route path='/posts' component={Posts}/>
                {/* <Route path='/:id' exact component={FullPost}/> */}
                </Switch>
                

            </div>
        );
    }
}

export default Blog;