import React from 'react';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Pagination from './components/Pagination/Pagination';
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import { PostContextProvider } from './postContext';
function App() {
  return (
    <>
      <PostContextProvider>
        <NavBar />
        <PostList />
        <Footer />
      </PostContextProvider>
    </>
  );
}

export default App;
