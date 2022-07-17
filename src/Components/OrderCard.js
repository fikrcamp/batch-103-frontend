import { FiX } from "react-icons/fi";
function OrderCard() {
  return (
    <div className="flex items-center space-x-1 border px-2 py-4 rounded-md">
      <h2 className="text-sm">x2</h2>
      <h2 className="flex-1 font-bold">Pizza</h2>
      <h2>$14</h2>
      <FiX color={"red"} />
    </div>
  );
}

export default OrderCard;
