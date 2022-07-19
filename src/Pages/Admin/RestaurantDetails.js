import AdminNav from "../../Components/AdminNav";
function RestaurantDetails() {
  return (
    <div>
      <AdminNav />
      <div className="flex justify-center">
        <div className="w-1/2 bg-white p-4  drop-shadow-md">
          <h2 className="font-bold text-2xl text-center">Restaurant Details</h2>
          <div className="mt-5 space-y-2">
            <div className="flex space-x-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Name"
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Phone"
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Address"
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Cusine"
              />
            </div>
            <textarea
              className="input w-full"
              placeholder="Restaurant Description"
            ></textarea>
            <input type="file" />
            <div className="flex justify-center">
              <button className="btn-dark">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
