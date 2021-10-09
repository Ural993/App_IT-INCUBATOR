import React from 'react';
import s from './Post.module.css'

export default function Post(props: any) {
    return (
        <div className={s.item}>
            {props.post}
        </div>
    )
}