import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let newPostElement = React.createRef();

const MyPosts = (props) => {
   const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   function addPost() {
      // console.log(newPostElement.current.value);
      props.addPost();
      // console.log(props.posts);
      // props.updateNewPostText('');
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   };

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;