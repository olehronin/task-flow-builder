import {ChangeEvent, FC, InputHTMLAttributes, memo} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const Input: FC<InputProps> = memo(({
                                        className,
                                        placeholder,
                                        value,
                                        onChange,
                                        disabled = false,
                                        type = "text",
                                        ...rest
                                    }) => {
    return (
        <div>
            <input
                className={`text-text-primary bg-transparent focus:bg-primary-hover focus:border-primary-border w-full
                    px-2.5 py-1 rounded-lg border border-accent-border outline-none transition-colors duration-150 ease-in-out 
                    ${className} 
                    ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                aria-label={rest["aria-label"] || placeholder || "Text input"}
                {...rest}
            />
        </div>
    );
});

Input.displayName = "Input";

export default Input;