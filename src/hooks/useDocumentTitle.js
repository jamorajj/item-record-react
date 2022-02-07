import { useState, useEffect } from 'react'

function useDocumentTitle(title = 'React App') {
  const [state, setState] = useState(title);

  useEffect(() => {
    document.title = state;
  }, [state]);

  return [state, setState];
}

export default useDocumentTitle