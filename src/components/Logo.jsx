import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0 group">
      <img
        src="/logo12.png"
        alt="Your Fitness Club logo"
        className="h-12 w-auto sm:h-14 lg:h-16 object-contain"
      />
    </Link>
  );
}
