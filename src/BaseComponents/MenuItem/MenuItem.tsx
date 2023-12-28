import "./MenuItem.css";
export const MenuItem = () => {
  return (
    <div className="menu-items">
      <li onClick={() => (document.location = "/AllProduct")}>
        <a href="#">Mens</a>
      </li>
      <li onClick={() => (document.location = "/AllProduct")}>
        <a href="#">Women</a>
      </li>
      <li>
        <a href="#">Kids</a>
      </li>
      <li>
        <a href="#">Acsecory</a>
      </li>
      <li>
        <a href="#">Shose</a>
      </li>
      <li>
        <a href="#">About Us</a>
      </li>
    </div>
  );
};
