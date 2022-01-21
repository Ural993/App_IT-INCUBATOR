import style from './FormControls.module.css'

export const Textarea =({meta, input, type, ...props}:any)=>{
    const hasError = meta.error && meta.touched
    return(
        <div className={style.formControl+' '+ (hasError? style.error:'')}>
            <textarea {...input} type={type}/>
            {hasError && <div><span>{meta.error}</span></div>}
        </div>
    )
}

export const Input =({meta, input, type, ...props}:any)=>{
    const hasError = meta.error && meta.touched
    return(
        <div className={style.formControl+' '+ (hasError? style.error:'')}>
            <input {...input} type={type}/>
            {hasError && <div><span>{meta.error}</span></div>}
        </div>
    )
}