import axios from 'axios';
import react from 'react'
import { UserType } from '../../redux/users-reducer';
import s from './Users.module.css'
import userPhoto from '../../assets/img/user.jpg'
import React from "react";


type PropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class Users extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    sentCurrentPageHandler(currentPage: number) {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={() => this.sentCurrentPageHandler(p)} className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    })}
                </div>
                {
                    this.props.users.map(u => {
                        return <div className={s.users}>
                            <div className={s.user_img}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#" />
                            </div>
                            <div className={'user_contant'}>
                                <div className="name">{u.name}</div>
                                {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Follow</button> :
                                    <button onClick={() => this.props.follow(u.id)}>Unfollow</button>}

                            </div>

                        </div>
                    })}
            </div>
        )

    }


}

export default Users;