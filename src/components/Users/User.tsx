import { follow, unfollow, UserType } from '../../redux/users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

type PropsType = {
    u: UserType
    followingProgress: number[]
}

export const User = (props: PropsType) => {
    const dispatch = useDispatch()

    const followHandler = (id: number) => {
        dispatch(follow(id))
    }
    const unfollowHandler = (id: number) => {
        dispatch(unfollow(id))
    }
    let u = props.u
    return (
        <>
            <div className={s.user_img}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#" />
                </NavLink>
            </div>
            <div className={'user_contant'}>
                <div className="name">{u.name}</div>
                {props.u.followed ?
                    <button disabled={props.followingProgress.some((id: number) => id === u.id)} onClick={() => {
                        unfollowHandler(u.id)
                    }}>Unfollow</button> :
                    <button disabled={props.followingProgress.some((id: number) => id === u.id)} onClick={() => {
                        followHandler(u.id)
                    }}>Follow</button>}
            </div>
        </>

    )
}