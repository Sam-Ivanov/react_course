import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

   let dialogs = [
      { id: 1, name: 'Dimich1' },
      { id: 2, name: 'Dimich2' },
      { id: 3, name: 'Dimich3' },
      { id: 4, name: 'Dimich4' },
      { id: 5, name: 'Dimich5' }
   ];
   let messages = [
      { id: 1, message: 'qwe1' },
      { id: 2, message: 'qwe2' },
      { id: 3, message: 'qwe3' },
      { id: 4, message: 'qwe4' },
      { id: 5, message: 'qwe5' }
   ];

   const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
   const messagesElements = messages.map(m => <Message message={m.message} id={m.id} key={m.id} />);

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;

