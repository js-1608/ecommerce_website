import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Handbag, Menu, X, ChevronDown } from "lucide-react";
import { TopBar } from "../Layout/TopBar";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

/* ------------------ DATA ------------------ */

const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Kid's Fashion",
    "Home & Kitchen",
    "Beauty",
    "Gadgets",
    "Accessories",
    "Health & Wellness",
];

const menuData = {
    "Women's Fashion": [
        {
            title: "Shop All Ethnic Wear",
            href: "/women/ethnic",
            items: [
                { label: "Kurtis & Kurtas", href: "/women/kurtis-kurtas" },
                { label: "Sarees", href: "/women/sarees" },
                { label: "Lehengas", href: "/women/lehengas" },
                { label: "Bottoms", href: "/women/bottoms" },
                { label: "Blouses & Fabrics", href: "/women/blouses" },
                { label: "Dupattas", href: "/women/dupattas" },
                { label: "Ethnic Dresses", href: "/women/ethnic-dresses" },
            ],
        },
        {
            title: "Western Wear",
            href: "/women/western",
            items: [
                { label: "Tops & T-shirts", href: "/women/tops" },
                { label: "Jeans", href: "/women/jeans" },
                { label: "Dresses", href: "/women/dresses" },
                { label: "Jackets & Blazers", href: "/women/jackets" },
                { label: "Sweatshirts", href: "/women/sweatshirts" },
            ],
        },
        {
            title: "Lingerie & Lounge",
            href: "/women/lingerie",
            items: [
                { label: "Bras", href: "/women/bras" },
                { label: "Panties", href: "/women/panties" },
                { label: "Sleepwear", href: "/women/sleepwear" },
                { label: "Shapewear", href: "/women/shapewear" },
            ],
        },
        {
            title: "Bags & Accessories",
            href: "/women/bags",
            items: [
                { label: "Handbags", href: "/women/handbags" },
                { label: "Tote Bags", href: "/women/tote-bags" },
                { label: "Wallets", href: "/women/wallets" },
                { label: "Clutches", href: "/women/clutches" },
            ],
        },
        {
            title: "Jewellery",
            href: "/women/jewellery",
            items: [
                { label: "Gold", href: "/women/jewellery/gold" },
                { label: "Diamond", href: "/women/jewellery/diamond" },
                { label: "Silver", href: "/women/jewellery/silver" },
                { label: "Watches", href: "/women/watches" },
            ],
        },
    ],
};

/* ------------------ COMPONENT ------------------ */

export default function Header() {
    const [desktopOpen, setDesktopOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("Women's Fashion");
    const [mobileCategory, setMobileCategory] = useState(null);


    // cart toggle
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };


    return (
        <>
        <TopBar/>
            <header className="relative z-50">
                {/* ---------------- TOP BAR ---------------- */}
                <div className="bg-black text-white">
                    <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 py-3">
                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden"
                            onClick={() => setMobileOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>

                        <h1 className="text-red-500 font-bold">Logo</h1>

                        {/* Desktop Nav */}
                        <button
                            onClick={() => setDesktopOpen((p) => !p)}
                            className="hidden md:block font-semibold hover:text-gray-300"
                        >
                            Categories
                        </button>

                        <Link to="/brands" className="hidden md:block font-semibold">
                            Brands
                        </Link>

                        <div  className="ml-auto">
                            <SearchBar/>
                        </div>

                        <Link to="/profile">
                            <User className="w-6" />
                        </Link>

                        <button className="relative" onClick={toggleCartDrawer}>
                            <Handbag className="w-6" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>
                    </div>
                </div>

                {/* ---------------- DESKTOP MEGA MENU ---------------- */}
                {desktopOpen && (
                    <div className="absolute left-0 top-full w-full bg-white border-t shadow-xl hidden md:block">
                        <div className="max-w-7xl mx-auto flex">
                            <div className="w-1/4 border-r">
                                {categories.map((cat) => (
                                    <div
                                        key={cat}
                                        onMouseEnter={() => setActiveCategory(cat)}
                                        className={`px-5 py-3 cursor-pointer flex justify-between
                    ${activeCategory === cat ? "bg-gray-100 font-semibold" : ""}`}
                                    >
                                        {cat}
                                        <span>›</span>
                                    </div>
                                ))}
                            </div>

                            <div className="w-3/4 p-6 grid grid-cols-4 gap-6">
                                {menuData[activeCategory]?.map((section) => (
                                    <div key={section.title}>
                                        <Link className="font-semibold block mb-2" to={section.href}>
                                            {section.title}
                                        </Link>
                                        {section.items.map((item) => (
                                            <Link
                                                key={item.label}
                                                to={item.href}
                                                className="block text-sm text-gray-600 hover:text-black"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* ---------------- MOBILE DRAWER ---------------- */}
                {mobileOpen && (
                    <div className="fixed inset-0 bg-white z-50 overflow-y-auto md:hidden">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="font-bold">Categories</h2>
                            <button onClick={() => setMobileOpen(false)}>
                                <X />
                            </button>
                        </div>

                        {categories.map((cat) => (
                            <div key={cat} className="border-b">
                                <button
                                    className="w-full flex justify-between items-center px-4 py-3 font-semibold"
                                    onClick={() =>
                                        setMobileCategory(mobileCategory === cat ? null : cat)
                                    }
                                >
                                    {cat}
                                    <ChevronDown
                                        className={`transition ${mobileCategory === cat ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {mobileCategory === cat && (
                                    <div className="px-6 pb-3">
                                        {menuData[cat]?.map((section) => (
                                            <div key={section.title} className="mb-3">
                                                <Link className="font-semibold block" to={section.href}>
                                                    {section.title}
                                                </Link>
                                                {section.items.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        to={item.href}
                                                        className="block text-sm text-gray-600 ml-3"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </header>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
        </>
    );
}
