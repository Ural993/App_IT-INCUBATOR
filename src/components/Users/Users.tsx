import {UserType} from '../../redux/users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.jpg'
import {NavLink} from 'react-router-dom'


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    sentCurrentPageHandler: (currentPage: number) => void
    toggleIsFollowingProgress: (followingProgress: boolean, userId: number) => void
}

export const Users = (props: PropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span onClick={() => props.sentCurrentPageHandler(p)}
                              className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>)
                })}
            </div>
            {
                props.users.map(u => {
                    return <div className={s.users}>
                        <User key={u.id} u={u} followingProgress={props.followingProgress}/>
                    </div>
                })}
        </div>
    )
}
const User = (props:any) => {
    let u = props.u
    debugger
    return (
        <>
            <div className={s.user_img}>
                <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#"/>
                </NavLink>
            </div>
            <div className={'user_contant'}>
                <div className="name">{u.name}</div>
                {props.followed ?
                    <button disabled={props.followingProgress.some((id:string) => id === u.id)} onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> :
                    <button disabled={props.followingProgress.some((id:string)  => id === u.id)} onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
            </div>
        </>

    )
}