import { Button as AntdButton } from 'antd'
import { BaseButtonProps } from 'antd/lib/button/button';
import classnames from 'classnames';
import { EOSComponent } from '../types';


export interface ButtonProps extends BaseButtonProps, EOSComponent {
    type?: 'primary' | 'link' | 'default' | 'text';
    htmlType?: 'submit' | 'button';
    className?: string;
    title: string
}


const Button: React.FC<ButtonProps> = ({
    type,
    htmlType,
    className = 'eos-btn',
    title
}) => {
    const classes = classnames(className)
    return (
        <AntdButton
            type={type}
            htmlType={htmlType}
            className={classes}
            style={{width:'100px', height:'30px'}}
             > 
             {title}
             </AntdButton>
    )
}

export default Button

