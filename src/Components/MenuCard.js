import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

function MenuCard() {
  return (
    <div className="border rounded-sm flex">
      <div className="flex-1 flex flex-col justify-center pl-3">
        <h2 className="font-bold">Mexican Pizza</h2>
        <h2 className="text-sm text-gray-500">$8.9</h2>
        <div className="flex items-center space-x-1">
          <FiMinusCircle size={20} />
          <p>0</p>
          <FiPlusCircle size={20} />
        </div>
      </div>
      <div>
        <img
          src="https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000"
          alt="food"
          className="h-24 w-28"
        />
      </div>
    </div>
  );
}

export default MenuCard;
