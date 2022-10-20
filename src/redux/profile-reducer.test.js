import profileReducer, { addPostActionCreator } from './profile-reducer';

it('length of posts should be incremented', () => {
   let action = addPostActionCreator('it-kamas');
   let state = {
      posts: [
         { id: 1, message: 'qweqwe1', likesCount: 5 },
         { id: 2, message: 'qweqwe2', likesCount: 10 },
         { id: 3, message: 'qweqwe3', likesCount: 15 },
         { id: 4, message: 'qweqwe4', likesCount: 666 }
      ]
   };

   let newState = profileReducer(state, action);

   expect(newState.posts.length).toBe(5);
})