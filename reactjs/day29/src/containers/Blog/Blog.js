import React, { Component } from 'react';
import './Blog.css';
import Posts from '../../components/Posts/Posts';
import { Route, Link } from 'react-router-dom';
import NewPost from '../../components/NewPost/NewPost';

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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={
                                {
                                pathname:'/new-post',
                                search:'?quick-submit=true',
                                hash:'#submit'}
                            }>NewPost</Link></li>

                        </ul>
                    </nav>
                </header>
                {/* <Route path ="/" exact render={()=><h1>Home</h1>}/>
                <Route path ="/" render={()=><h1>Home 2</h1>}/> */}
                <Route path='/' component={Posts}/>
                <Route path='/new-post' exact component={NewPost}/>
               

            </div>
        );
    }
}

export default Blog;