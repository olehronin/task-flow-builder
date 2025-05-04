import {FC, memo} from "react";

interface CloseIconProps {
    width?: number | string;
    height?: number | string;
    color?: string;
    strokeWidth?: number | string;
    className?: string;
    ariaLabel?: string;
}

const CloseIcon: FC<CloseIconProps> = memo(({
                                                width = 24,
                                                height = 24,
                                                color = "currentColor",
                                                strokeWidth = 2,
                                                className,
                                                ariaLabel = "Close",
                                            }) => {
    return (
        <svg
            width={width}
            height={height}
            fill={"none"}
            viewBox={"0 0 24 24"}
            xmlns={"http://www.w3.org/2000/svg"}
            className={className}
            aria-label={ariaLabel}
        >
            <path
                d={"M18 6L6 18"}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
            />
            <path
                d={"M6 6L18 18"}
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
            />
        </svg>
    );
});

CloseIcon.displayName = "CloseIcon";

export default CloseIcon;