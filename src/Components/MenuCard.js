import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

function MenuCard({ item, add, remove }) {
  return (
    <div className="border rounded-sm flex">
      <div className="flex-1 flex flex-col justify-center pl-3">
        <h2 className="font-bold">{item.name}</h2>
        <h2 className="text-sm text-gray-500">${item.price}</h2>
        <div className="flex items-center space-x-1">
          <FiMinusCircle size={20} onClick={() => remove(item)} />
          <p>0</p>
          <FiPlusCircle size={20} onClick={() => add(item)} />
        </div>
      </div>
      <div>
        <img
          src={`http://localhost:8000/${item.image}`}
          alt="food"
          className="h-24 w-28"
        />
      </div>
    </div>
  );
}

export default MenuCard;
