import { useLocation } from "react-router";

export default function Def14() {
  const { pathname } = useLocation();
  return (
    <div>
      output = {pathname.includes("s") && <span>p</span>}
      {pathname.includes("w") && <span>y</span>}
    </div>
  );
}
