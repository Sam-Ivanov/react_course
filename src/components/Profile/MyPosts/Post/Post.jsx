import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg" alt="" />
         {props.message}
         <div>
            <span>like {props.likesCount}</span>
         </div>
      </div>
   )
}

export default Post;