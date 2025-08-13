import { House, Search, Monitor, Popcorn, Volleyball, Projector, LayoutPanelLeft, UserPen } from "lucide-react";
import { useState, useEffect } from "react";
import { account } from "../lib/appwrite";

export default function Header() {
    const [isActive, setIsActive] = useState(0); // Set initial active state, e.g., to the first icon
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoadingUser, setIsLoadingUser] = useState(true);

    useEffect(() => {
        account
            .get()
            .then((user) => setCurrentUser(user))
            .catch(() => setCurrentUser(null))
            .finally(() => setIsLoadingUser(false));
    }, []);

    const handleSignInWithGoogle = () => {
        const successUrl = window.location.origin + "/";
        const failureUrl = window.location.origin + "/";
        account.createOAuth2Session("google", successUrl, failureUrl);
    };

    const handleSignOut = async () => {
        try {
            await account.deleteSession("current");
        } finally {
            setCurrentUser(null);
            window.location.reload();
        }
    };

    // 3. Labels are now corrected and descriptive
    const Icons = [
        { Icon: House, label: "Home" },
        { Icon: Search, label: "Search" },
        { Icon: Monitor, label: "TV" },
        { Icon: Popcorn, label: "Movies" },
        { Icon: Volleyball, label: "Sports" },
        { Icon: Projector, label: "Shows" },
        { Icon: LayoutPanelLeft, label: "Categories" },
        { Icon: UserPen, label: "Subscribe" },
    ];

    return (
        <div>
            {/* The main container width transition applies on hover */}
            <div className="group main h-screen w-24 fixed top-0 left-0 hover:w-[280px] transition-all duration-300 ease-in-out z-50 ">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent pointer-events-none z-10"></div>

                <div className="icon-list relative text-white flex flex-col gap-8"> 
                    <div className="logo py-8 mb-28 w-24 z-50 px-4">
                        {/* 1. Img tag is self-closed and has an alt prop */}
                        <img
    src="https://img.hotstar.com/image/upload/v1737554969/web-assets/prod/images/rebrand/logo.png"
    alt="Hotstar Logo" />
                    </div>

                    {Icons.map(({ Icon, label }, index) => (
                        <div
                            // 2 & 4. 'group' is now on each item, and z-index is applied consistently
                    

                            className={`flex items-center gap-4 px-8 hover:text-white cursor-pointer z-50 ${isActive === index ? "text-white" : "text-gray-500"}`}
                            key={index}
                            onClick={() => setIsActive(index)}
                        >
                            <span><Icon /></span>
                            <span className="hidden group-hover:inline">{label}</span>
                        </div>
                    ))}
                    <div className="px-8 pb-8">
                        {isLoadingUser ? (
                            <span className="text-gray-500 text-sm">Checking session…</span>
                        ) : currentUser ? (
                            <div className="flex flex-col gap-2">
                                <span className="text-xs text-gray-400 break-all">
                                    {currentUser.name || currentUser.email}
                                </span>
                                <button
                                    className="bg-white/10 hover:bg-white/20 text-white text-sm rounded px-3 py-1"
                                    onClick={handleSignOut}
                                >
                                    Sign out
                                </button>
                            </div>
                        ) : (
                            <button
                                className="bg-blue-600 hover:bg-blue-500 text-white text-sm rounded px-3 py-1"
                                onClick={handleSignInWithGoogle}
                            >
                                Sign in with Google
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}