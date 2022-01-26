import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {PhotoType} from "../components/Common/types/types";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotoType
    followed: boolean
}
export type initialUsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}

let initialState: initialUsersStateType = {
    users: [
        // { id: 1, followed: true, fullName: 'Nik', age: 14, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', status: 'I like drive', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 2, followed: false, fullName: 'Solo', age: 27, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', status: 'I am love Susen', location: { city: 'Orel', country: 'Russia' } },
        // { id: 3, followed: true, fullName: 'Dimich', age: 33, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', status: 'I like programming', location: { city: 'Minsk', country: 'Belarus' } },

    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],

}

export const usersReducer = (state = initialState, action: ActionsType): initialUsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })]
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })]
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.followingProgress ? [...state.followingProgress, action.userId] : [...state.followingProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state
    }
}
type ActionsType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | ToggleIsFetchingACType
    | ToggleIsFollowingProgressACType

type FollowACType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowACType => ({type: FOLLOW, userId})
type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowACType => ({type: UNFOLLOW, userId})
type SetUsersACType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersACType => ({type: SET_USERS, users})
type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
type SetTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
type ToggleIsFetchingACType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
type ToggleIsFollowingProgressACType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingProgress: boolean
    userId: number
}
export const toggleIsFollowingProgress = (followingProgress: boolean, userId: number): ToggleIsFollowingProgressACType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingProgress,
    userId
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data: any) => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId:any) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true,userId))
        usersAPI.follow(userId)
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId:any) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true,userId))
        usersAPI.unfollow(userId)
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
