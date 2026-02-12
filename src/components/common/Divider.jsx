function Divider({ height = '2px', color = 'var(--text-primary)' }) {
    return (
        <div 
            className="divider" 
            style={{ height, background: color }}
        ></div>
    );
}

export default Divider;
