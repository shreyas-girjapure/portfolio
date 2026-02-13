function PageHeader({ title, subtitle }) {
    return (
        <>
            <div className="sticker clearance-sticker">
                <span className="clearance-sticker-text">SF<br />CERTIFIED</span>
            </div>

            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'baseline', 
                marginBottom: '60px' 
            }}>
                <h1 style={{ marginBottom: '0' }}>
                    {title.split(' ').map((word, index) => (
                        <span key={index}>
                            {word}
                            {index < title.split(' ').length - 1 && <br />}
                        </span>
                    ))}
                </h1>
                <p className="mono">{subtitle}</p>
            </div>
        </>
    );
}

export default PageHeader;
