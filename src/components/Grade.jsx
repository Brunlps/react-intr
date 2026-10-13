const Grade = ({ coluna = 1, children }) => {
    return (
        <div
            style={{ gridTemplateColumns: `repeat(${coluna}, 1fr)` }}
            className="grid gap-1.5 bg-amber-400 text-red-50 hover:bg-green-700"
        >
            {children}
        </div>
    );
}

export default Grade;