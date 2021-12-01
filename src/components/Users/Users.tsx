import {UserType} from '../../redux/users-reducer'
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.jpg'
import {NavLink} from 'react-router-dom'
import axios from "axios";

type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    sentCurrentPageHandler: (currentPage: number) => void
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
                        <div className={s.user_img}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#"/>
                            </NavLink>
                        </div>
                        <div className={'user_contant'}>
                            <div className="name">{u.name}</div>
                            {u.followed ?
                                <button onClick={() => {
                                    {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials:true,
                                                headers:{'API-KEY':'fe88c94b-7e3d-4776-912d-349e13ec1b3a'}
                                            })
                                            .then((response: any) => {
                                                if(response.data.resultCode ===0){
                                                    props.unfollow(u.id)
                                                }
                                            })

                                    }
                                }}>Follow</button> :
                                <button onClick={() => {
                                    {   axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {},{
                                            withCredentials:true,
                                            headers:{'API-KEY':'fe88c94b-7e3d-4776-912d-349e13ec1b3a'}
                                        })
                                        .then((response: any) => {
                                            if(response.data.resultCode ===0){
                                                props.follow(u.id)
                                            }
                                        })

                                    }
                                }}>Unfollow</button>}

                        </div>

                    </div>
                })}
        </div>
    )
}