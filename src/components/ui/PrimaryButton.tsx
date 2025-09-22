export const PrimaryButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => {
    return (
        <button onClick={onClick} className="rounded-md text-sm font-medium transition-all outline-none focus-visible:border-ring bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 text-background cursor-pointer">
            {children}
        </button>
    );
}
