import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import style from '../../common/FormsControls/FormsControls.module.css';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
   return <form onSubmit={handleSubmit}>
      <div><button>save</button></div>
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div>Full Name: {createField('Full name', 'fullName', [], Input)}</div>
      <div>Looking for a job: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}</div>
      <div>My skills:{createField('My skills', 'lookingForAJobDescription', [], Textarea)}</div>
      <div>About me: {createField('About me', 'aboutMe', [], Textarea)}</div>
      <div>Contacts: {Object.keys(profile.contacts).map(key => {
         return <div key={key} className={s.contact}>
            {key}: {createField(key, 'contacts.' + key, [], Input)}
         </div>
      })}</div>
   </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)
export default ProfileDataFormReduxForm;

