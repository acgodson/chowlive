import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => onOpenChange(false)} />
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        {children}
      </div>
    </div>,
    document.body
  );
};

export const DialogContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-6">{children}</div>;
};

export const DialogHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mb-4">{children}</div>;
};

export const DialogTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="text-lg font-semibold">{children}</h2>;
};

export const DialogFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="mt-6 flex justify-end space-x-2">{children}</div>;
};

export const DialogClose: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button
      className="absolute top-2 right-2 text-gray-400 hover:text-gray-500"
      onClick={onClick}
    >
      {children}
    </button>
  );
};