import { rerenderEntireTree } from "../render";

let state = {
   profilePage: {
      posts: [
         { id: 1, message: 'qweqwe1', likesCount: 5 },
         { id: 2, message: 'qweqwe2', likesCount: 10 },
         { id: 3, message: 'qweqwe3', likesCount: 15 },
         { id: 4, message: 'qweqwe4', likesCount: 666 }
      ],
   },

   dialogsPage: {
      messages: [
         { id: 1, message: 'qwe1' },
         { id: 2, message: 'qwe2' },
         { id: 3, message: 'qwe3' },
         { id: 4, message: 'qwe4' },
         { id: 5, message: 'qwe5' }
      ],
      dialogs: [
         { id: 1, name: 'Dimich1' },
         { id: 2, name: 'Dimich2' },
         { id: 3, name: 'Dimich3' },
         { id: 4, name: 'Dimich4' },
         { id: 5, name: 'Dimich5' }
      ],
   },
   sidebar: {}
};

export let addPost = (postMessage) => {
   let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
   };
   state.profilePage.posts.push(newPost);
   rerenderEntireTree(state);
};

export default state;