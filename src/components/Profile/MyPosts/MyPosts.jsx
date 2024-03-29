import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator/*, required*/ } from '../../../utils/validatiors/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength1000 = maxLengthCreator(1000);

const AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div >
            <Field className={s.myPostTextAria} name='newPostText' component={Textarea} placeholder={'Post message'}
               validate={[/*required,*/ maxLength1000]} />
         </div>
         <div>
            <button >Add post</button>
         </div>
      </form>
   )
}

let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);

const MyPosts = React.memo(props => {
   const postsElements = props.posts.map(p => <Post className={s.posts} key={p.id} message={p.message} likesCount={p.likesCount} />)

   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <AddNewPostFormRedux onSubmit={onAddPost} />
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
});

// class MyPosts extends PureComponent {


//    // shouldComponentUpdate(nextProps, nextState) {
//    //    return this.props !== nextProps || nextState !== this.state;
//    // }

//    render() {
//       console.log('RENDER YO');

//       let postsElements = this.props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />)

//       let onAddPost = (values) => {
//          this.props.addPost(values.newPostText);
//       }

//       return (
//          <div className={s.postsBlock}>
//             <h3>My posts</h3>
//             <AddNewPostFormRedux onSubmit={onAddPost} />
//             <div className={s.posts}>
//                {postsElements}
//             </div>
//          </div>
//       )
//    }
// }

export default MyPosts;