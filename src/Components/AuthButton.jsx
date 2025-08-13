import { useEffect, useState } from 'react';
import { account } from '../lib/appwrite';

export default function AuthButton() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    account
      .get()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const signIn = () => {
    const successUrl = window.location.origin + '/';
    const failureUrl = window.location.origin + '/';
    account.createOAuth2Session('google', successUrl, failureUrl);
  };

  const signOut = async () => {
    await account.deleteSession('current');
    window.location.reload();
  };

  return (
    <div className="fixed top-4 right-4 z-[100] flex items-center gap-2">
      {loading ? (
        <span className="text-xs text-gray-300 bg-black/40 px-3 py-1 rounded">Checking…</span>
      ) : user ? (
        <>
          <span className="hidden sm:inline text-xs text-white bg-black/40 px-3 py-1 rounded">
            {user.name || user.email}
          </span>
          <button
            onClick={signOut}
            className="bg-white/10 hover:bg-white/20 text-white cursor-pointer text-sm rounded px-3 py-1"
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          onClick={signIn}
          className="bg-blue-600 hover:bg-blue-500 text-white text-sm rounded cursor-pointer px-3 py-1 shadow"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}


