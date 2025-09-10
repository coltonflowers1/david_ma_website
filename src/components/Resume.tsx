import React, { useEffect } from 'react';

export function Resume() {
  useEffect(() => {
    // Redirect to the PDF file directly
    window.location.href = `${import.meta.env.BASE_URL}ActingResumeMostRecent-38Yg7weDfS-cOwDeVh_gbA.pdf`;
  }, []);

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-gray-600">Redirecting to resume...</p>
      </div>
    </div>
  );
}