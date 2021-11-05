import axios from 'axios';
import react from 'react'
import { UserType } from '../../redux/users-reducer';
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.jpg'


type PropsType = {
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
}

let Users = (props: PropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response: any) => {
                props.setUsers(response.data.items)
            })
    }
    return (
        <div>
            {
                props.users.map(u => {
                    return <div className={s.users}>
                        <div className={s.user_img}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#" />
                        </div>
                        <div className={'user_contant'}>
                            <div className="name">{u.name}</div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Follow</button> :
                                <button onClick={() => props.follow(u.id)}>Unfollow</button>}

                        </div>

                    </div>
                })}
        </div>
    )
}

export default Users;