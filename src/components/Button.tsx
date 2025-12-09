// src/components/Button.tsx

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({
  children,
  onClick,
  variant = 'primary'
}: ButtonProps) {
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-gray-800 hover:bg-gray-400',
    ghost: 'bg-transparent hover:bg-gray-100'
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded font-medium transition ${variants[variant]}`}
    >
      {children}
    </button>
  );
}