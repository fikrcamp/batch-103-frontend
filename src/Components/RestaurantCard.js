import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

function RestaurantCard({ name }) {
  return (
    <Link to="/restaurant">
      <div className="flex bg-white rounded-md drop-shadow-md space-x-2">
        <div>
          <img
            src="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
            alt="food"
            className="h-28"
          />
        </div>
        <div className="flex-1 py-2">
          <h3 className="text-2xl">{name}</h3>
          <p className="text-sm text-gray-400 py-1">
            Indian | Arabian | Somali
          </p>
          <div className="flex items-center">
            <FaLocationArrow size={14} className="text-green-400 mr-2" />
            <p className="text-sm ">Jigjiga Yar</p>
          </div>
        </div>
        <div className="p-2">
          <div className="bg-gray-200 rounded-full text-sm p-1">4.3</div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
