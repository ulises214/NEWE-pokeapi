import { FC, PropsWithChildren } from 'react';
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
                onClick
                    ? 'text-white bg-indigo-600 focus:ring-2 focus:ring-offset-2 hover:bg-indigo-700 focus:ring-indigo-500'
                    : 'text-indigo-700 bg-indigo-100 cursor-not-allowed'
            } inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm  focus:outline-none`}
        >
            {children}
        </button>
    );
};
