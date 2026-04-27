type BackgroundGridProps = {
    dark: boolean;
    size?: number;
};

export default function BackgroundGrid({
    dark,
    size = 30,
}: BackgroundGridProps) {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div
                className={`
                    absolute inset-0
                    ${dark
                        ? "bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] opacity-20"
                        : "bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] opacity-20"
                    }
                `}
                style={{
                    backgroundSize: `${size}px ${size}px`,
                }}
            />
        </div>
    );
}