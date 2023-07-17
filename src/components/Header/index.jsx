import Logo from "../Logo";

const Header = () => {
  return (
    <>
    <header className="App-header">
      <div className="left-side">
        <img src="logo.png" alt="Logo" className="logo" />
        <h1 className="app-name">App Name</h1>
        <button className="nav-button">Dashboard</button>
        <button className="nav-button">Attendance</button>
        <button className="nav-button">Update</button>
        <button className="nav-button">Report</button>
      </div>
      <div className="right-side">
        <img src="profile-pic.png" alt="Profile" className="profile-pic" />
        <div className="dropdown">
          <button className="dropdown-button">Dropdown</button>
          <div className="dropdown-content">
            <button className="logout-button">Logout</button>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
