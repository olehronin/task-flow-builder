import {ButtonHTMLAttributes, FC, memo, MouseEvent, ReactNode} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    isIconOnly?: boolean;
}

const Button: FC<ButtonProps> = memo(({
                                          children,
                                          className,
                                          onClick,
                                          disabled = false,
                                          type = "button",
                                          isIconOnly,
                                          ...rest
                                      }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={rest["aria-label"] || "Button"}
            className={`bg-primary border-primary-border text-text-primary rounded-lg hover:bg-primary-hover border transition-colors duration-150 ease-in-out 
                ${className}
                ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
                ${isIconOnly ? "px-1 py-1" : "px-4 py-2"}
            `}
            {...rest}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
