import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "Cargo Joggers",
      description:
        "Relaxed-fit cargo joggers featuring multiple pockets for functionality. Drawstring waist and cuffed hems for a modern look.",
      price: 45,
      discountPrice: 40,
      countInStock: 15,
      sku: "BW-002",
      category: "Bottom Wear",
      brand: "UrbanStyle",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Olive", "Black"],
      collections: "Urban Collection",
      material: "Cotton",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=10",
          altText: "Cargo Joggers Front View",
        },
      ],
      rating: 4.7,
      numReviews: 20,
    },
    {
      _id: "2",
      name: "Tapered Sweatpants",
      description:
        "Tapered sweatpants designed for comfort. Elastic waistband with adjustable drawstring, perfect for lounging or athletic activities.",
      price: 35,
      discountPrice: 30,
      countInStock: 25,
      sku: "BW-003",
      category: "Bottom Wear",
      brand: "ChillZone",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gray", "Charcoal", "Blue"],
      collections: "Lounge Collection",
      material: "Fleece",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=11",
          altText: "Tapered Sweatpants Front View",
        },
      ],
      rating: 4.3,
      numReviews: 18,
    },
    {
      _id: "3",
      name: "Denim Jeans",
      description:
        "Classic slim-fit denim jeans with a slight stretch for comfort. Features a zip fly and five-pocket styling for a timeless look.",
      price: 60,
      discountPrice: 50,
      countInStock: 30,
      sku: "BW-004",
      category: "Bottom Wear",
      brand: "DenimCo",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Dark Blue", "Light Blue"],
      collections: "Denim Collection",
      material: "Denim",
      gender: "Men",
      images: [
        {
          url: "https://picsum.photos/500/500?random=12",
          altText: "Denim Jeans Front View",
        },
      ],
      rating: 4.6,
      numReviews: 22,
    },
    {
      _id: "4",
      name: "Off-Shoulder Top",
      description:
        "An elegant off-shoulder top with ruffled sleeves and a flattering fit. Ideal for adding a touch of femininity to your outfit.",
      price: 45,
      discountPrice: 40,
      countInStock: 35,
      sku: "TW-W-004",
      category: "Top Wear",
      brand: "Elegance",
      sizes: ["S", "M", "L"],
      colors: ["Red", "White", "Blue"],
      collections: "Evening Collection",
      material: "Polyester",
      gender: "Women",
      images: [
        {
          url: "https://picsum.photos/500/500?random=32",
          altText: "Off-Shoulder Top",
        },
      ],
      rating: 4.7,
      numReviews: 18,
    },
    {
      _id: "5",
      name: "Lace-Trimmed Cami Top",
      description:
        "A delicate cami top with lace trim and adjustable straps. The lightweight fabric makes it perfect for layering or wearing alone during warmer weather.",
      price: 35,
      discountPrice: 30,
      countInStock: 40,
      sku: "TW-W-005",
      category: "Top Wear",
      brand: "DelicateWear",
      sizes: ["S", "M", "L"],
      colors: ["Black", "White"],
      collections: "Lingerie-Inspired",
      material: "Silk Blend",
      gender: "Women",
      images: [
        {
          url: "https://picsum.photos/500/500?random=33",
          altText: "Lace-Trimmed Cami Top",
        },
      ],
      rating: 4.8,
      numReviews: 22,
    },
    {
      _id: "6",
      name: "Graphic Print Tee",
      description:
        "A trendy graphic print tee with a relaxed fit. Pair it with jeans or skirts for a cool and casual look.",
      price: 30,
      discountPrice: 25,
      countInStock: 45,
      sku: "TW-W-006",
      category: "Top Wear",
      brand: "StreetStyle",
      sizes: ["S", "M", "L", "XL"],
      colors: ["White", "Black"],
      collections: "Urban Collection",
      material: "Cotton",
      gender: "Women",
      images: [
        {
          url: "https://picsum.photos/500/500?random=34",
          altText: "Graphic Print Tee",
        },
      ],
      rating: 4.6,
      numReviews: 30,
    },
    {
      _id: "7",
      name: "Ribbed Long-Sleeve Top",
      description:
        "A cozy ribbed long-sleeve top that offers comfort and style. Perfect for layering during cooler months.",
      price: 55,
      discountPrice: 50,
      countInStock: 30,
      sku: "TW-W-007",
      category: "Top Wear",
      brand: "ComfortFit",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Gray", "Pink", "Brown"],
      collections: "Fall Collection",
      material: "Cotton Blend",
      gender: "Women",
      images: [
        {
          url: "https://picsum.photos/500/500?random=35",
          altText: "Ribbed Long-Sleeve Top",
        },
      ],
      rating: 4.7,
      numReviews: 26,
    },
  ];
  
  const scrollRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const scroll = (direction) => {
    const amount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  const updateScrollButton = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButton);
    updateScrollButton();

    return () => el.removeEventListener("scroll", updateScrollButton);
  }, []);

  // ---------------- DRAG SCROLL ----------------
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  return (
    <section className="py-12 bg-gray-50">
      <div
        className={`container mx-auto px-4 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Explore New Arrivals</h2>
          <p className="text-gray-600">Discover our latest product range</p>
        </div>

        {/* Arrows */}
        <div className="absolute right-6 top-16 flex gap-2 z-10">
          <button
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
            className={`p-2 rounded-full shadow ${
              canScrollLeft
                ? "bg-white hover:bg-black hover:text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
            className={`p-2 rounded-full shadow ${
              canScrollRight
                ? "bg-white hover:bg-black hover:text-white"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          className="flex gap-6 overflow-x-auto pb-4 select-none"
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="min-w-[280px] bg-white rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.images[0].url}
                alt={product.images[0].altText}
                draggable="false"
                className="w-full h-72 object-cover rounded-t-xl"
              />
              <div className="p-3">
                <Link to={`product/${product._id}`} className="font-medium">
                  {product.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
