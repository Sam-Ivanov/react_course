const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         state.newMessageBody = action.body;
         return state;

      case SEND_MESSAGE:
         let body = state.newMessageBody;
         state.newMessageBody = '';
         state.messages.push({ id: 6, message: body });
         return state;

      default:
         return state;
   }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
   type: UPDATE_NEW_MESSAGE_BODY,
   body: body
});

export default dialogsReducer;