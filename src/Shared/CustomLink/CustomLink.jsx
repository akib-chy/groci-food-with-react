import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      className="mb-0 custom-link"
      style={{
        borderColor: match ? "orange" : "lightgray",
      }}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
export default CustomLink;
