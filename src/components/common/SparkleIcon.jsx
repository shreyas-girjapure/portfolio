function SparkleIcon({ size = 11, strokeWidth = 1.8 }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            style={{ marginLeft: '3px', verticalAlign: 'middle' }}
        >
            <path d="M6 1V11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M1 6H11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M2.2 2.2L9.8 9.8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d="M9.8 2.2L2.2 9.8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
}

export default SparkleIcon;