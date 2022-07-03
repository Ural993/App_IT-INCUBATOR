import { follow, requestUsers, sentCurrentPageTC, unfollow, UserType } from '../../redux/users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.jpg'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPage, getFollowingProgress, getPageSize, getTotalUsersCount, getUsersSelector } from '../../redux/users-selectors'
import { useEffect } from 'react'

type PropsType = {
}

export const Users = (props: PropsType) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsersSelector)
    const currentPage = useSelector(getCurrentPage)
    const followingProgress = useSelector(getFollowingProgress)

    const dispatch = useDispatch()

    const sentCurrentPageHandler = (p: any) => {
        dispatch(sentCurrentPageTC(p))
    }

    useEffect(()=>{
        dispatch(requestUsers(currentPage, pageSize))
    }, [])

        let pagesCount = Math.ceil(totalUsersCount / pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return (
                            <span onClick={() => sentCurrentPageHandler(p)}
                                className={currentPage === p ? s.selectedPage : ''}>{p}</span>)
                    })}
                </div>
                {
                    users.map(u => {
                        return <div className={s.users}>
                            <User key={u.id} u={u} followingProgress={followingProgress} />
                        </div>
                    })}
            </div>
        )
    }

const User = (props: any) => {
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
                {props.followed ?
                    <button disabled={props.followingProgress.some((id: string) => id === u.id)} onClick={() => {
                        unfollowHandler(u.id)
                    }}>Unfollow</button> :
                    <button disabled={props.followingProgress.some((id: string) => id === u.id)} onClick={() => {
                        followHandler(u.id)
                    }}>Follow</button>}
            </div>
        </>

    )
}