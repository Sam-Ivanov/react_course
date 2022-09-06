import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

let newPostElement = React.createRef();

const MyPosts = (props) => {
   const postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   function getPost() {
      console.log(newPostElement.current.value);
   }
   
   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement}></textarea>
            </div>
            <div>
               <button onClick={getPost}>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;