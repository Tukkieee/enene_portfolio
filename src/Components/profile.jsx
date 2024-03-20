

export const Profile = ({isSticky}) => {
    return (
        <>
            <div className={isSticky ? 'sticky' : 'relative'} id="profile">
                <div className="profile-img">
                    {/* <img src={Profile} alt="Profile" /> */}
                </div>
                <div className="profile-info">
                    <h1>I'm Enene, Miracle</h1>
                    <p>Digital Product Designer based <br />
                        in Uyo, Nigeria.</p>
                </div>
            </div>
        </>
    )
}