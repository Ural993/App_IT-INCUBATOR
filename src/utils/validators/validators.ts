

export const required = (value:string) =>{
    if(value) return undefined
    return 'Field is required!'
}

 const maxLength = (max:number)=>(value:string)=>{
    if(value.length>max) return `Max length is ${max} symbols!`
    return undefined
}
export const maxLength30 =maxLength(30)