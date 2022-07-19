import { FilterType, requestUsers, sentCurrentPageTC } from '../../redux/users-reducer'
import s from './Users.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentPage, getFollowingProgress, getPageSize, getTotalUsersCount, getUsers, getUsersSelector } from '../../redux/users-selectors'
import { useEffect } from 'react'
import { User } from './User'
import { Field, Form, Formik } from 'formik'

type UserSearchFormType = {
    onFilterChanged: (filter: FilterType) => void
}

type FormType = {
    term: string
    friend: 'null' | 'true' | 'false'
}
export const UsersSearchForm = (props: UserSearchFormType) => {
    const submit = (values: FormType) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter)
    }

    return (
        <div>
            <Formik
                initialValues={{ term: '', friend: 'null' }}
                onSubmit={submit}
            >
                {({
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Form >
                        <Field
                            type="text"
                            name="term"
                        />
                        <Field
                            as="select"
                            name="friend"
                        >
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}