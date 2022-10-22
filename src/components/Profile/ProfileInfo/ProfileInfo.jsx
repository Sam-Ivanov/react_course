import React from 'react';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'



const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0]);
      }
   }

   return (
      <div >
         <div className={s.descriptionBlock}>
            <img className={s.mainPhoto} src={profile.photos.large || userPhoto} alt="ava" />
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            <div className={s.status}>Status: <span><ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></span></div>
            <div>Looking for a job: <span className={s.profileDescription}>{profile.lookingForAJob ? 'yes' : 'no'}</span></div>
            <div>{profile.lookingForAJob && <span className={s.profileDescription}>{profile.lookingForAJobDescription}</span>}</div>
            <div>About me: <span className={s.profileDescription}>{profile.aboutMe}</span></div>
            <div>Full Name: <span className={s.profileDescription}>{profile.fullName}</span></div>
         </div>
      </div>
   )
}

export default ProfileInfo;