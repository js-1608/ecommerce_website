import { Link } from "react-router-dom"
import MenCollection from "../../assets/mens-collection.webp"
import WomenCollection from "../../assets/womens-collection.webp"

const GenderCollection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 py-16 px-8 gap-16">
      <div className="relative">
        <img
          src={MenCollection}
          alt="Men's collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold">Men's Collection</h2>
            <Link to="#" className="text-base text-semibold underline mt-4 inline-block">Shop Now</Link>
        </div>
      </div>
      <div className="relative">
        <img
          src={WomenCollection}
          alt="Men's collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold">Women's Collection</h2>
            <Link to="#" className="text-base text-semibold underline mt-4 inline-block">Shop Now</Link>
        </div>
      </div>
      <div className="relative">
        <img
          src={MenCollection}
          alt="Men's collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 left-8 bg-white/90 p-4">
            <h2 className="text-2xl font-bold">Kids's Collection</h2>
            <Link to="#" className="text-base text-semibold underline mt-4 inline-block">Shop Now</Link>
        </div>
      </div>
    </section>
  )
}

export default GenderCollection
