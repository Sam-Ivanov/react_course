import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
   let path = '/dialogs/' + props.id;

   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>

   )
}

const Message = (props) => {
   return <div className={s.message}>{props.message}</div>
}

const Dialogs = (props) => {

   let dialogsData = [
      { id: 1, name: 'Dimich1' },
      { id: 2, name: 'Dimich2' },
      { id: 3, name: 'Dimich3' },
      { id: 4, name: 'Dimich4' },
      { id: 5, name: 'Dimich5' }
   ];

   let messagesData = [
      { id: 1, message: 'qwe1' },
      { id: 2, message: 'qwe2' },
      { id: 3, message: 'qwe3' },
      { id: 4, message: 'qwe4' },
      { id: 5, message: 'qwe5' }
   ];

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
         </div>
         <div className={s.messages}>
            <Message message={messagesData[0].message} />
            <Message message={messagesData[1].message} />
            <Message message={messagesData[2].message} />
         </div>
      </div>
   )
}

export default Dialogs;

