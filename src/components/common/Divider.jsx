function Divider({ height = '2px', color = 'black' }) {
    return (
        <div 
            className="divider" 
            style={{ height, background: color }}
        ></div>
    );
}

export default Divider;
