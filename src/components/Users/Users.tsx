import react from 'react'
import { UserType } from '../../redux/users-reducer';
import s from './Users.module.css'


type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

let Users = (props: PropsType) => {
    return (
        <div>
            {
                props.users.map(u => {
                    return <div className={s.users}>
                        <div className={s.user_img}>
                            <img src={u.photoUrl} alt="#" />
                        </div>
                        <div className={'user_contant'}>
                            <div className="name">{u.fullName}</div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Follow</button> :
                                <button onClick={() => props.follow(u.id)}>Unfollow</button>}

                        </div>

                    </div>
                })}
        </div>
    )
}

export default Users;