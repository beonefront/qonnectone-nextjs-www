'use client';

import React, { useState } from 'react';

interface EmailFormProps {
  onSubmit: (email: string) => void;
  onClose: () => void;
}

export const EmailForm: React.FC<EmailFormProps> = ({ onSubmit, onClose }) => {
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Adres email jest wymagany');
      return;
    }

    if (!validateEmail(email)) {
      setError('Wprowadź poprawny adres email');
      return;
    }

    if (!acceptTerms) {
      setError('Musisz zaakceptować regulamin');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      onSubmit(email);
      setEmail('');
      onClose();
    } catch (error) {
      console.error('Email sending error:', error);
      setError('Wystąpił błąd podczas wysyłania. Spróbuj ponownie.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">
          Zostaw swój e-mail
        </h3>
        <p className="text-gray-600">
          Skontaktujemy się z Tobą w sprawie naszej platformy
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Adres email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="twoj@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            disabled={isLoading}
          />
          {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
          )}
        </div>

        {/* Checkbox akceptacji regulaminu */}
        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="acceptTerms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
            disabled={isLoading}
            className="mt-1 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-600 leading-relaxed">
            Akceptuję{' '}
            <a
              href="/polityka-prywatnosci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline"
            >
              regulamin
            </a>
            {' '}i wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu
          </label>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors disabled:opacity-50 cursor-pointer"
          >
            Anuluj
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="rounded-md text-sm font-medium transition-all outline-none focus-visible:border-ring bg-primary shadow-xs hover:bg-primary/90 h-9 px-4 py-2 text-background cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Wysyłanie...
              </div>
            ) : (
              'Wyślij'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
