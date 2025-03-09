
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-nyuro-50 to-white px-4">
      <div className="glass-card p-12 rounded-2xl text-center max-w-md animate-fade-in">
        <div className="w-20 h-20 bg-nyuro-100 text-nyuro-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold">404</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-nyuro-600 hover:bg-nyuro-700 text-white rounded-md px-6 py-3 font-medium transition-colors"
        >
          <Home size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
