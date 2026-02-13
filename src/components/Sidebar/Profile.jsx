function Profile() {
    return (
        <div className="plate profile-plate">
            <div style={{ position: 'relative' }}>
                <h1 style={{ fontSize: '20px', marginBottom: '4px', fontWeight: '700' }}>
                    Shreyas Girjapure
                </h1>
                <p className="role-title">
                    Lead Software Engineer<br />
                    Salesforce Architect (Aspiring)<br />
                    Pune, India
                </p>
                <div className="sticker status-sticker">
                    Open for<br />Opportunities <span style={{ fontFamily: 'Arial, sans-serif' }}>✳</span>
                </div>
            </div>
        </div>
    );
}

export default Profile;
