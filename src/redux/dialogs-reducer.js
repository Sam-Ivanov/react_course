const SEND_MESSAGE = 'network/dialogs/SEND-MESSAGE';

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
   ]
};

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let body = action.newMessageBody;
         return {
            ...state,
            messages: [...state.messages, { id: 6, message: body }]
         };
      default:
         return state;
   }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
export default dialogsReducer;

