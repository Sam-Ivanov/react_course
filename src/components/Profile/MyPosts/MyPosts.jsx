import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

   let posts = [
      { id: 1, message: 'qweqwe1', likesCount: 5 },
      { id: 2, message: 'qweqwe2', likesCount: 10 },
      { id: 3, message: 'qweqwe3', likesCount: 15 },
      { id: 4, message: 'qweqwe4', likesCount: 666 }
   ];

   const postsElements = posts.map(p=><Post key={p.id} message={p.message} likesCount={p.likesCount} />)

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;