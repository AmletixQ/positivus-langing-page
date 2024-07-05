import "./Navbar.scss";

const links = [
  { name: "About us", link: "#" },
  { name: "Services", link: "#" },
  { name: "Use Cases", link: "#" },
  { name: "Pricing", link: "#" },
  { name: "Blog", link: "#" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      {links.map(({ name, link }) => (
        <a href={link}>{name}</a>
      ))}
    </nav>
  );
};

export default Navbar;
