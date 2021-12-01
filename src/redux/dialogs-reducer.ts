type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
type DialogsType = {
    name: string,
    id: number
}
type MessageType = {
    message: string
}
let initialState: InitialStateType = {
    dialogs: [
        { name: 'Vovs', id: 1 },
        { name: 'Petr', id: 2 },
        { name: 'Sasha', id: 3 },
        { name: 'Dimich', id: 4 }
    ],
    messages: [
        { message: 'Hi, how are yoy?' },
        { message: 'Whre are you?' },
        { message: 'I am fine' }
    ]
}


export let dialogsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        default: return state

    }
}