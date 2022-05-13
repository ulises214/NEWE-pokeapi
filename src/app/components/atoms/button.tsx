import { FC, PropsWithChildren } from 'react';
import ButtonClasses from './button.module.postcss';
interface ButtonProps {
    type: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    type,
    children,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={!onClick}
            className={`${
                onClick ? ButtonClasses.active : ButtonClasses.inactive
            } inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm  focus:outline-none`}
        >
            {children}
        </button>
    );
};
