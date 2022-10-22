import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

   const [editMode, setEditMode] = useState(false);

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   }

   const onSubmit = (formData) => {
      saveProfile(formData);
      // setEditMode(false);
   }

   return (
      <div >
         <div className={s.descriptionBlock}>
            <img className={s.mainPhoto} src={profile.photos.large || userPhoto} alt="ava" />
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            <div className={s.status}>Status: <span><ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></span></div>
            {editMode
               ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
               : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => { setEditMode(true) }} />}
         </div>
      </div>
   )
}
const ProfileData = ({ profile, isOwner, goToEditMode }) => {
   return <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div>Full Name: <span className={s.profileDescription}>{profile.fullName}</span></div>
      <div>Looking for a job: <span className={s.profileDescription}>{profile.lookingForAJob ? 'yes' : 'no'}</span></div>
      {profile.lookingForAJob && <div>My skills: <span className={s.profileDescription}>{profile.lookingForAJobDescription}</span></div>}
      <div>About me: <span className={s.profileDescription}>{profile.aboutMe}</span></div>
      <div>Contacts: {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}</div>
   </div>
}

// const ProfileDataForm = ({ profile }) => {
//    return <div>
//       form
//       {/* <div>Full Name: <span className={s.profileDescription}>{profile.fullName}</span></div>
//       <div>Looking for a job: <span className={s.profileDescription}>{profile.lookingForAJob ? 'yes' : 'no'}</span></div>
//       {profile.lookingForAJob && <div><span className={s.profileDescription}>{profile.lookingForAJobDescription}</span></div>}
//       <div>About me: <span className={s.profileDescription}>{profile.aboutMe}</span></div>
//       <div>Contacts: {Object.keys(profile.contacts).map(key => <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />)}</div> */}
//    </div>
// }


const Contact = ({ contactTitle, contactValue }) => {
   return <div className={s.contact}>{contactTitle}: <span className={s.profileDescription}>{contactValue}</span></div>
}

export default ProfileInfo;