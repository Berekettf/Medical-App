import React, { useState } from 'react';
import axios from 'axios';

type MultipleFileUploadsProps = {
  label: string;
  files: File[];
  setFiles: any;
  endPoint: string;
}

export default function MultipleFileUploads ({ label, files, setFiles, endPoint }:MultipleFileUploadsProps) {
  const [uploading, setUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  // Remove a file from the list
  const handleRemoveFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  // Upload files to the specified endpoint
  const handleUpload = async () => {
    if (files.length === 0) {
      alert('Please select some files before uploading.');
      return;
    }
  
    const formData = new FormData();
    files.forEach((file) => formData.append('files', file));
  
    try {
      setUploading(true);
  
      // Update your Axios URL to include the full path for troubleshooting
      const uploadUrl = `http://localhost:5000/api/${endPoint}`; // Replace with your actual server URL and endpoint
      console.log(`Uploading to URL: ${uploadUrl}`);
  
      const response = await axios.post(uploadUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
  
      console.log('Files successfully uploaded:', response.data);
      alert('Files successfully uploaded!');
    } catch (error: any) {
      console.error('Error uploading files:', error);
      if (error.response) {
        console.error('Server responded with status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <div className="max-w-lg mx-auto">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none"
      />
      {files.length > 0 && (
        <ul className="my-4">
          {files.map((file, index) => (
            <li key={index} className="flex items-center justify-between p-2 border border-gray-300 rounded-md">
              <span className="text-sm">{file.name}</span>
              <button
                type="button"
                className="text-red-500 hover:text-red-700"
                onClick={() => handleRemoveFile(index)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        onClick={handleUpload}
        disabled={uploading || files.length === 0}
        className={`w-full py-2 px-4 text-white rounded-md ${uploading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700 '}`}
      >
        {uploading ? 'Uploading...' : 'Upload Files'}
      </button>
    </div>
  );
};

 
