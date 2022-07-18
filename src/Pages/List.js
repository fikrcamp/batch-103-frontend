import { FaSearch } from "react-icons/fa";
import RestaurantCard from "../Components/RestaurantCard";
function List() {
  return (
    <div>
      {/* SEARCH BOX */}
      <div className="bg-white flex justify-center p-3 border-t">
        <div className="flex items-center bg-gray-200  p-3">
          <FaSearch size={20} className="mr-3" />
          <input
            type="text"
            placeholder="Search ...."
            className="outline-none w-96 bg-gray-200 "
          />
        </div>
        <select className="text-sm px-2 bg-gray-200 border-l border-white">
          <option>Hargeisa</option>
          <option>Burco</option>
          <option>Borama</option>
        </select>
        <button className="bg-black text-white text-sm font-bold px-5">
          Search
        </button>
      </div>
      {/* SEARCH BOX */}

      {/* LIST */}
      <div className="flex justify-center">
        <div className=" w-2/3 mt-5">
          <div className="grid grid-cols-2 gap-3">
            <RestaurantCard name={"Sultan"} />
            <RestaurantCard name={"Sultan"} />
            <RestaurantCard name={"Sultan"} />
            <RestaurantCard name={"Sultan"} />
            <RestaurantCard name={"Sultan"} />
            <RestaurantCard name={"Sultan"} />
          </div>
        </div>
      </div>
      {/* LIST */}
    </div>
  );
}

export default List;
