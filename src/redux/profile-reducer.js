import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'network/profile/ADD-POST';
const SET_USER_PROFILE = 'network/profile/SET_USER_PROFILE';
const SET_STATUS = 'network/profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'network/profile/SAVE_PHOTO_SUCCESS';

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
      case SAVE_PHOTO_SUCCESS: {
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos }
         };
      }

      default:
         return state;
   }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

//================================================ thunk block

export const getUserProfile = (userId) => async (dispatch) => {
   const res = await usersAPI.getProfile(userId);
   dispatch(setUserProfile(res.data))
};

export const getStatus = (userId) => async (dispatch) => {
   const res = await profileAPI.getStatus(userId);
   dispatch(setStatus(res.data))
};

export const updateStatus = (status) => async (dispatch) => {
   const res = await profileAPI.updateStatus(status);
   if (res.data.resultCode === 0) {
      dispatch(setStatus(status))
   }
};

export const savePhoto = (file) => async (dispatch) => {

   const res = await profileAPI.savePhoto(file);
   if (res.data.resultCode === 0) {
      dispatch(savePhotoSuccess(res.data.data.photos));
   }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
   const userId = getState().auth.userId;
   const res = await profileAPI.saveProfile(profile);
   if (res.data.resultCode === 0) {
      dispatch(getUserProfile(userId));
   } else {
      dispatch(stopSubmit("edit-profile", { _error: res.data.messages[0] }))
   }
};

export default profileReducer;