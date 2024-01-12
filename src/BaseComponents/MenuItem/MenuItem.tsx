import "./MenuItem.css";
export const MenuItem = () => {
  return (
    <div className="menu-items">
      <li onClick={() => (document.location = "/AllProduct")}>
        <a href="#">Jacket</a>
      </li>
      <li onClick={() => (document.location = "/AllProduct")}>
        <a href="#">T-Sherts</a>
      </li>
      <li>
        <a href="#">Pants</a>
      </li>
      <li>
        <a href="#">Manto</a>
      </li>
      <li>
        <a href="#">Shose</a>
      </li>
      <li>
        <a href="#">Acsecory</a>
      </li>
    </div>
  );
};
