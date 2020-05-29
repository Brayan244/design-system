import { useEffect } from 'react';

/**
 * @param {React.MutableRefObject} ignore
 * @param {(event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} callback
 */
export default function useOutsideClick(ignore, callback) {
  function handleDocumentClick(event) {
    event.stopPropagation();
    if (ignore && ignore.contains(event.target)) return;

    callback(event);
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleDocumentClick);
    return () => {
      document.removeEventListener('mouseup', handleDocumentClick);
    };
  });
}
