import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   return (
      <div >
         <div>
            <img className={s.bg} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="" />
         </div>
         <div className={s.descriptionBlock}>
            ava+description
         </div>
      </div>
   )
}

export default ProfileInfo;