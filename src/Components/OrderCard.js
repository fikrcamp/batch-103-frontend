import { FiX } from "react-icons/fi";
function OrderCard({ item, remove }) {
  return (
    <div className="flex items-center space-x-1 border px-2 py-4 rounded-md">
      <h2 className="text-sm">x{item.qty}</h2>
      <h2 className="flex-1 font-bold">{item.name}</h2>
      <h2>${item.qty * item.price}</h2>
      <FiX color={"red"} onClick={() => remove(item)} />
    </div>
  );
}

export default OrderCard;
