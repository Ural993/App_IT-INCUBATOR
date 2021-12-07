import React from 'react'
import {connect} from 'react-redux'
import { usersAPI } from '../../api/api'
import {AppStateType} from '../../redux/redux-store'
import {
    follow, getUsers, initialUsersStateType,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow,
    UserType
} from '../../redux/users-reducer'
import {Preloader} from '../Common/Preloader/Preloader'
import {Users} from './Users'



// type MSTPType = {
//     users: Array<UserType>
//     pageSize: number
//     totalUsersCount: number
//     currentPage: number
//     isFetching:boolean
// }

type MDTPType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress: (followingProgress:boolean, userId:number) => void
    getUsers:(currentPage:number, pageSize:number)=>void
}
type PropsType = initialUsersStateType & MDTPType

class UsersAPIComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize ).then((data: any) => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUsersCount(data.totalCount)
        //     })
    }

    sentCurrentPageHandler = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(currentPage, this.props.pageSize )
            .then((data: any) => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users} pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                       follow={this.props.follow} unfollow={this.props.unfollow}
                       sentCurrentPageHandler={this.sentCurrentPageHandler}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                       followingProgress={this.props.followingProgress}
                />
            </>
        )

    }


}

const MapStateToProps = (state: AppStateType): initialUsersStateType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress

    }
}

// const MapDispatchToProps = (dispatch: Dispatch):MDTPType  => {
//     return ({
//         follow: (userId: number) => dispatch(follow(userId)),
//         unfollow: (userId: number) => dispatch(unfollow(userId)),
//         setUsers: (users: Array<UserType>) => dispatch(setUsers(users)),
//         setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
//         setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCount(totalUsersCount)),
//         toggleIsFetching: (isFetching:boolean)=>dispatch(toggleIsFetching(isFetching))
//     })
//}

const UsersContainer = connect<initialUsersStateType, MDTPType, {}, AppStateType>(MapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, 
    toggleIsFollowingProgress, getUsers})(UsersAPIComponent)


export default UsersContainer