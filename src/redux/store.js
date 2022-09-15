import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, message: 'qweqwe1', likesCount: 5 },
            { id: 2, message: 'qweqwe2', likesCount: 10 },
            { id: 3, message: 'qweqwe3', likesCount: 15 },
            { id: 4, message: 'qweqwe4', likesCount: 666 }
         ],
         newPostText: 'it kamas.com'
      },

      dialogsPage: {
         dialogs: [
            { id: 1, name: 'Dimich1' },
            { id: 2, name: 'Dimich2' },
            { id: 3, name: 'Dimich3' },
            { id: 4, name: 'Dimich4' },
            { id: 5, name: 'Dimich5' }
         ],
         messages: [
            { id: 1, message: 'qwe1' },
            { id: 2, message: 'qwe2' },
            { id: 3, message: 'qwe3' },
            { id: 4, message: 'qwe4' },
            { id: 5, message: 'qwe5' }
         ],
         newMessageBody: '',

      },
      sidebar: {}
   },

   _callSubscriber() {
      console.log('state changed');
   },

   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   },

   dispatch(action) { //{type: 'ADD-POST'}
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);

   }
};

export default store;
window.store = store;