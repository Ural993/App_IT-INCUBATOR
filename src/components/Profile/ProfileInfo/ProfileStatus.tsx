import React from "react";

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
                editMode: true
            }
        )
    }
    deactivateEditMode = (e: any) => {
        this.setState({
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }
    changeStatus = (e: any) => {
        let value = e.currentTarget.value
        this.setState({
            status: value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode ? <div>
                        <input onChange={this.changeStatus} autoFocus onBlur={this.deactivateEditMode}
                               value={this.state.status} type="text"/>
                    </div> :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'} </span>
                    </div>}
            </div>
        )
    }


}