

const Body = () => {
  return (
    <div className="body">
      <div className="profile-section">
        <img src="profile-pic.png" alt="Profile" className="large-profile-pic" />
        <h2>Hey, [Name of the person]!</h2>
        <p>We hope you have a nice day.</p>
      </div>
      <hr className="divider" />
      <div className="box-container">
        {/* Render your boxes here */}
      </div>
    </div>
  );
};

export default Body;