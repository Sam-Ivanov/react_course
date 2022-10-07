import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   return (
      <div >
         <div>
            <img className={s.bg} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="" />
         </div>
         <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt="ava" />
            <div>About me: <span className={s.qwe}>{props.profile.aboutMe}</span></div>
            <div>Full Name: <span className={s.qwe}>{props.profile.fullName}</span></div>
            ava+description
         </div>
      </div>
   )
}

export default ProfileInfo;