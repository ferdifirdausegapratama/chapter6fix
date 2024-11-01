import "./navbarWithStyling.css";
function NavbarWithStyling(props) {
  console.log(props);
  return (
    <div>
      <h1>FSW 2</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default NavbarWithStyling;
