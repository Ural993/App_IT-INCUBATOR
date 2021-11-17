
import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer'
import { Users } from './Users'

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

export class UsersAPIComponent extends React.Component<PropsType> {
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

        return (
            <Users users={this.props.users} pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount} currentPage={this.props.currentPage}
                follow={this.props.follow} unfollow={this.props.unfollow}
                sentCurrentPageHandler={this.sentCurrentPageHandler} />
        )

    }


}
const MapPropsToState = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

const MapDispatchToProps = (dispatch: any) => {
    return ({
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType) => dispatch(setUsersAC(users)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (totalUsersCount: number) => dispatch(setTotalUsersCountAC(totalUsersCount))

    })
}

const UsersContainer = connect(MapPropsToState, MapDispatchToProps)(UsersAPIComponent)


export default UsersContainer