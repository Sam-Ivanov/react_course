import React from 'react';
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Field, reduxForm } from 'redux-form';
// import { AddMessageFormRedux } from './AddMessageForm';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../utils/validatiors/validators';


const Dialogs = (props) => {
   let state = props.dialogsPage;
   const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />);
   const messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id} />);
   const newMessageBody = state.newMessageBody;

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody);
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            <div>{messagesElements}</div>
         </div>
         <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
   )
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} name='newMessageBody' placeholder='Enter your message'
            validate={[required, maxLength50]}/>
         </div>
         <div>
            <button>Send</button>
         </div>
      </form>
   )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;

