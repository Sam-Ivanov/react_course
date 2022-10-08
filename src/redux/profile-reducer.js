import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
   posts: [
      { id: 1, message: 'qweqwe1', likesCount: 5 },
      { id: 2, message: 'qweqwe2', likesCount: 10 },
      { id: 3, message: 'qweqwe3', likesCount: 15 },
      { id: 4, message: 'qweqwe4', likesCount: 666 }
   ],
   profile: null,
   status: ''
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            message: action.newPostText,
            likesCount: 0
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         };
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         };
      }

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         };
      }

      default:
         return state;
   }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST,newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

//================================================ thunk block

export const getUserProfile = (userId) => {
   return (dispatch) => {
      usersAPI.getProfile(userId)
         .then(res => {
            dispatch(setUserProfile(res.data))
         })
   }
}

export const getStatus = (userId) => {
   return (dispatch) => {
      profileAPI.getStatus(userId)
         .then(res => {
            dispatch(setStatus(res.data))
         })
   }
}

export const updateStatus = (status) => {
   return (dispatch) => {
      profileAPI.updateStatus(status)
         .then(res => {
            if (res.data.resultCode === 0) {
               dispatch(setStatus(status))
            }
         })
   }
}


export default profileReducer;