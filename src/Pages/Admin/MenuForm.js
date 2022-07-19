import AdminNav from "../../Components/AdminNav";
function MenuForm() {
  return (
    <div>
      <AdminNav />
      <div className="flex justify-center">
        <div className="w-1/2 bg-white p-4  drop-shadow-md">
          <h2 className="font-bold text-2xl text-center">Menu Form</h2>
          <div className="mt-5 space-y-2">
            <div className="flex space-x-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Menu Item"
              />
              <input type="text" className="input w-full" placeholder="Price" />
            </div>

            <textarea
              className="input w-full"
              placeholder="Menu Description"
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

export default MenuForm;
