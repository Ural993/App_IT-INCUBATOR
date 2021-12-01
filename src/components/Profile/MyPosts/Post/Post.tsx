import React from 'react';
import s from './Post.module.css'


type PropsType={
    id:string
    post:string
}

export default function Post(props: PropsType) {
    return (
        <div className={s.item} key={props.id}>
            {props.post}
        </div>
    )
}