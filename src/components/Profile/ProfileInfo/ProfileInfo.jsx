import React from 'react';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/images/user.png'



const ProfileInfo = ({ profile, status, updateStatus }) => {
   return (
      <div >
         <div className={s.descriptionBlock}>
            <img className={s.mainPhoto} src={profile.photos.large || userPhoto} alt="ava" />
            <div>About me: <span className={s.profileDescription}>{profile.aboutMe}</span></div>
            <div>Full Name: <span className={s.profileDescription}>{profile.fullName}</span></div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
         </div>
      </div>
   )
}

export default ProfileInfo;