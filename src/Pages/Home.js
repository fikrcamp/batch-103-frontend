import { FaSearch, FaAngleRight } from "react-icons/fa";
import RestaurantCard from "../Components/RestaurantCard";
function Home() {
  return (
    <div>
      {/* BANNER */}
      <div className="bg-green-200 h-[420px] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold py-5">
            Search for your faviourate restaurant
          </h2>
          <div className="flex">
            <div className="flex items-center bg-white p-2">
              <FaSearch size={20} className="mr-3" />
              <input
                type="text"
                placeholder="Search ...."
                className="outline-none"
              />
            </div>
            <button className="bg-black text-white text-xs font-bold px-5">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* BANNER */}
      {/* REST LIST */}
      <div className="p-10">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">Restaurants Near You</h2>
          <div className="flex items-center">
            <h2 className="font-bold text-sm">View All</h2>
            <FaAngleRight size={20} className="text-green-400" />
          </div>
        </div>
        <div className="grid grid-cols-2 py-2 gap-4">
          <RestaurantCard />
          <RestaurantCard />
        </div>
      </div>
      {/* REST LIST */}
    </div>
  );
}

export default Home;
