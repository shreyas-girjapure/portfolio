function NavItem({ label, count, active, onClick }) {
    return (
        <a 
            href="#" 
            className={`nav-item ${active ? 'active' : ''}`}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            <span>{label}</span>
            <span className="count-badge">{count}</span>
        </a>
    );
}

export default NavItem;
