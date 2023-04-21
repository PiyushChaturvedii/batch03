import React, { Component } from 'react';
import './Blog.css';
import Posts from '../../components/Posts/Posts';
import { Route, Routes } from 'react-router-dom';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {
    render() {
        const Home = () => {
            <h1>Home </h1>
        }
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">NewPost</a></li>
                            
                        </ul>
                    </nav>
                </header>
                <Routes>
                  <Route path="/" element={<Posts/>}/>
                  <Route path="/new-post" element={<NewPost/>}/>
                    
                </Routes>
                    
            </div>
        );
    }
}

export default Blog;