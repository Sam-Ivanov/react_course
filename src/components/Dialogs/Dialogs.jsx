import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'; 


const Dialogs = (props) => {
   let state = props.store.getState().dialogsPage;
   const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
   const messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />);
   const newMessageBody = state.newMessageBody;

   const onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   }

   const onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
            <div>
               <div>
                  <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea>
               </div>
               <div>
                  <button onClick={onSendMessageClick}>Send</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;

