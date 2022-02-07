import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';

function NotFoundScreen() {
  useDocumentTitle('Not Found');

  return (
    <div className="flex items-center flex-col">
      <h2 className="font-bold text-xl">Page not found.</h2>
      <p>
        <Link to="/" className="hover:underline">Back to home page</Link>
      </p>
    </div>
  );
};

export default NotFoundScreen;