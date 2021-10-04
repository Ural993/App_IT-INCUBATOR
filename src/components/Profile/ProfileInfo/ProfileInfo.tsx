import React from 'react';
import s from './ProfileInfo.module.css'

export default function ProfileInfo() {
    return (
        <div>
            <div className={s.avatar}>
                <img src="https://vraki.net/sites/default/files/inline/images/1_42.jpg" alt="" />
            </div>
            <div>
                ava+disctiptions
            </div>
        </div>
    )
}