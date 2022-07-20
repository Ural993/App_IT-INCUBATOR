import { FilterType } from '../../redux/users-reducer'
import { useSelector } from 'react-redux'
import { getFilter} from '../../redux/users-selectors'
import { Field, Form, Formik } from 'formik'

type UserSearchFormType = {
    onFilterChanged: (filter: FilterType) => void
}
type FriendType = 'null' | 'true' | 'false'
type FormType = {
    term: string
    friend: FriendType
}
export const UsersSearchForm = (props: UserSearchFormType) => {
    const filter = useSelector(getFilter)

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
                initialValues={{ term: filter.term, friend: String(filter.friend) as FriendType }}
                onSubmit={submit}
                enableReinitialize
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