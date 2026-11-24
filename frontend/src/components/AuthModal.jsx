import { useEffect, useState } from "react";

const AuthModal = ({ isOpen, onClose, initialMode = "login" }) => {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [accountType, setAccountType] = useState(isLogin ? "customer" : "owner");

  useEffect(() => {
    setAccountType(isLogin ? "customer" : "owner");
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const switchMode = (loginMode) => {
    setIsLogin(loginMode);
    setError("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!isLogin) {
      console.log("Signing up with:", { name, email, password });
    } else {
      console.log("Logging in with:", { email, password });
    }

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl font-bold leading-none text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>

        <h2 id="auth-modal-title" className="mb-6 text-center text-2xl font-bold text-gray-900">
          {isLogin ? "Welcome Back!" : "Create an Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label htmlFor="auth-name" className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="auth-name"
                type="text"
                required
                autoComplete="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Your name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          )}

          <div>
            <label htmlFor="auth-email" className="mb-1 block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="auth-email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div>
            <label htmlFor="auth-password" className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="auth-password"
              type="password"
              required
              minLength={isLogin ? undefined : 8}
              autoComplete={isLogin ? "current-password" : "new-password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {!isLogin && (
            <div>
              <label htmlFor="auth-confirm-password" className="mb-1 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="auth-confirm-password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          )}

          {error && (
            <p role="alert" className="text-sm font-medium text-red-600">
              {error}
            </p>
          )}
          {/* Sign up type owner, admin, customer */}
          <div>
            <label htmlFor="auth-type" className="mb-1 block text-sm font-medium text-gray-700">
              Account Type
            </label>
            <select
              id="auth-type"
              required
              value={accountType}
              onChange={(event) => setAccountType(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
            >
              <option value="customer">Customer</option>
              <option value="owner">Business Owner</option>
              <option value="admin">Admin</option>
            </select>

          </div>
          <button
            type="submit"
            className={`w-full rounded-lg py-2.5 font-semibold text-white transition duration-200 ${
              isLogin ? "bg-[#3E9363] hover:bg-emerald-700" : "bg-sky-600 hover:bg-sky-700"
            }`}
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode(false)}
                className="font-semibold text-sky-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => switchMode(true)}
                className="font-semibold text-sky-600 hover:underline"
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
