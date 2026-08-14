import './styles.css'

function ColorBar({ children }) {
    return (
        <div
            className="flex flex-wrap items-center justify-center gap-2 p-3 mx-auto max-w-7xl rounded-3xl border border-white/30 bg-slate-200/50 shadow-lg backdrop-blur-md"
        >
            {children}
        </div>
    );
}

export default ColorBar;