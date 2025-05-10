interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function Button({ children, className = '' }: ButtonProps) {
    return (
        <button
            className={`bg-[var(--foreground)] text-[var(--foreground-black)] text-xl font-bold px-6 py-3 rounded-lg hover:bg-[var(--foreground-alt)] hover:text-[var(--background)] transition-colors ${className}`}
        >
            {children}
        </button>
    );
}
