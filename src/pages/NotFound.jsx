import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800">Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline">Go back to Home</Link>
    </div>
  );
}

export default NotFound;
