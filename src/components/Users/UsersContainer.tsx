
import react from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer'
import { Users } from './Users'


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

const UsersContainer = connect(MapPropsToState, MapDispatchToProps)(Users)


export default UsersContainer