
import react from 'react'
import { connect } from 'react-redux'
import { AppStateType } from '../../redux/redux-store'
import { followAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer'
import Users from './Users'

const MapPropsToState = (state: AppStateType) => {
    return {
        users: state.usersPage.users
    }
}

const MapDispatchToProps = (dispatch: any) => {
    return ({
        follow: (userId: number) => dispatch(followAC(userId)),
        unfollow: (userId: number) => dispatch(unfollowAC(userId)),
        setUsers: (users: UserType) => dispatch(setUsersAC(users))

    })
}

const UsersContainer = connect(MapPropsToState, MapDispatchToProps)(Users)


export default UsersContainer