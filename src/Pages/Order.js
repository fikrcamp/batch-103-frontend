import OrderCard from "../Components/OrderCard";

function Order() {
  return (
    <div>
      <h2 className="text-center font-bold text-3xl mt-10">Place your order</h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 bg-white w-3/5 mt-4 p-5">
          <div>
            <h2 className="text-center font-bold pb-3">Enter your details</h2>
            <div className="space-y-2 mt-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Full Name"
              />
              <input type="text" className="input w-full" placeholder="Phone" />
              <input
                type="text"
                className="input w-full"
                placeholder="Address"
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Payment Method"
              />
            </div>
            <button className="bg-green-400 w-full rounded-md text-white font-bold p-3 my-2">
              Place Order
            </button>
          </div>
          <div>
            <h2 className="text-center font-bold pb-3">Ordered Items</h2>
            <div className="space-y-2">
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
            <div className="font-bold py-2 text-end">Total: $30</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
