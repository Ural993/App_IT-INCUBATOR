const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    followed: boolean
    name: string
    age: number
    photos: {
        small: string
        large: string
    }
    status: string
    location: {
        city: string
        country: string
    }
}
type initialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: initialStateType = {
    users: [
        // { id: 1, followed: true, fullName: 'Nik', age: 14, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', status: 'I like drive', location: { city: 'Moscow', country: 'Russia' } },
        // { id: 2, followed: false, fullName: 'Solo', age: 27, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', status: 'I am love Susen', location: { city: 'Orel', country: 'Russia' } },
        // { id: 3, followed: true, fullName: 'Dimich', age: 33, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg', status: 'I like programming', location: { city: 'Minsk', country: 'Belarus' } },

    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,

}

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })]
            }
        }
        case UNFOLLOW: {
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })]
            }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalUsersCount }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        default: return state
    }
}

type FollowACType = {
    type: typeof FOLLOW
    userId: number
}
type UnfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}

export const followAC = (userId: number): FollowACType => ({ type: FOLLOW, userId })
export const unfollowAC = (userId: number): UnfollowACType => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users: UserType) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount: number) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetchingAC = (isFetching:boolean) => ({ type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;