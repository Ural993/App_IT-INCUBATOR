const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    followed: boolean
    fullName: string
    age: number
    status: string
    location: {
        city: string
        country: string
    }
}
type initialStateType = {
    users: Array<UserType>
}

let initialState: initialStateType = {
    users: [
        { id: 1, followed: true, fullName: 'Nik', age: 14, status: 'I like drive', location: { city: 'Moscow', country: 'Russia' } },
        { id: 2, followed: false, fullName: 'Solo', age: 27, status: 'I am love Susen', location: { city: 'Orel', country: 'Russia' } },
        { id: 3, followed: true, fullName: 'Dimich', age: 33, status: 'I like programming', location: { city: 'Minsk', country: 'Belarus' } },

    ]
}

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return state
        }
        case UNFOLLOW: {
            return state
        }
        default: return state
    }
}

type FollowACType = {
    type: typeof FOLLOW
}
type UnfollowACType = {
    type: typeof UNFOLLOW
}

export const followAC = (): FollowACType => ({ type: FOLLOW })
export const unfollowAC = (): UnfollowACType => ({ type: UNFOLLOW })

export default usersReducer;