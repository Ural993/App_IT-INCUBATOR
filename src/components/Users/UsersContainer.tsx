
import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer'
import { Preloader } from '../Common/Preloader/Preloader'
import { Users } from './Users'


type MSTPType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}

type MDTPType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
type PropsType = MSTPType & MDTPType

 class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    sentCurrentPageHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then((response: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }


    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users users={this.props.users} pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                follow={this.props.follow} unfollow={this.props.unfollow}
                sentCurrentPageHandler={this.sentCurrentPageHandler} />
            </>
        )

    }


}
const MapStateToProps = (state: AppStateType):MSTPType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,

    }
}

const MapDispatchToProps = (dispatch: any):MDTPType  => {
    return ({
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount)),
        toggleIsFetching: (isFetching:boolean)=>dispatch(toggleIsFetchingAC(isFetching))
    })
}

const UsersContainer = connect<MSTPType, MDTPType, {},AppStateType >(MapStateToProps, MapDispatchToProps)(UsersAPIComponent)


export default UsersContainer