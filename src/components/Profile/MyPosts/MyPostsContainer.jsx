import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPostsContainer = (props) => {
   let state = props.store.getState();
   // const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   // let newPostElement = React.createRef();


   let addPost = () => {
      // props.addPost();
      props.store.dispatch(addPostActionCreator());
   }

   let onPostChange = (text) => {
      // let text = newPostElement.current.value;
      // props.updateNewPostText(text);
      // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
   };

   return (
      <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts}/>
   )
}

export default MyPostsContainer;