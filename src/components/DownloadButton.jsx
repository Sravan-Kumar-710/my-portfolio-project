import React from 'react';
import { FiDownload } from 'react-icons/fi';

const DownloadButton = ({ filePath, fileName, children, className = '' }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName || 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 ${className}`}
    >
      <FiDownload className="mr-2" />
      {children || 'Download Resume'}
    </button>
  );
};

export default DownloadButton;
