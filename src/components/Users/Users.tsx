import { FilterType, requestUsers, sentCurrentPageTC } from '../../redux/users-reducer'
import s from './Users.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPage, getFilter, getFollowingProgress, getPageSize, getTotalUsersCount, getUsersSelector } from '../../redux/users-selectors'
import { useEffect } from 'react'
import { User } from './User'
import { UsersSearchForm } from './UsersSearchForm'
import { useHistory } from 'react-router-dom'
const queryString = require('query-string');

type PropsType = {
}

export const Users = (props: PropsType) => {

    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const users = useSelector(getUsersSelector)
    const currentPage = useSelector(getCurrentPage)
    const followingProgress = useSelector(getFollowingProgress)
    const filter = useSelector(getFilter)

    const dispatch = useDispatch()
    const history = useHistory()

    const sentCurrentPageHandler = (p: any) => {
        dispatch(sentCurrentPageTC(p))
    }

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1))

        let actualPage = currentPage
        let actualFilter = filter

        if (!!parsed.page) actualPage = Number(parsed.page)
        if (!!parsed.term) actualFilter = { ...actualFilter, term: parsed.term }
        if (!!parsed.friend) actualFilter = { ...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false}

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        history.push({
            pathname: '/users',
            search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
        })
    }, [filter, currentPage])

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onFilterChanged = (friend: FilterType) => {
        dispatch(requestUsers(1, pageSize, friend))
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span onClick={() => sentCurrentPageHandler(p)}
                            className={currentPage === p ? s.selectedPage : ''}>{p}</span>)
                })}
            </div>
            <UsersSearchForm onFilterChanged={onFilterChanged} />
            {users.map(u => {
                return <div className={s.users}>
                    <User key={u.id} u={u} followingProgress={followingProgress} />
                </div>
            })}
        </div>
    )
}
