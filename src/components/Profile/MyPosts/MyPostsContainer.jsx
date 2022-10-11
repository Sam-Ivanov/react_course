import { addPostActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

function mapStateToProps(state) {
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}
function mapDispatchToProps(dispatch) {
   return {
      addPost: (newPostText) => {
         dispatch(addPostActionCreator(newPostText));
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;