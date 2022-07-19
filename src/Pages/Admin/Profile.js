import AdminNav from "../../Components/AdminNav";
function Profile() {
  return (
    <div>
      <AdminNav />
      <div className="flex justify-center">
        <div className="w-1/2">
          <div className=" bg-white p-4  drop-shadow-md">
            <h2 className="font-bold text-2xl text-center">Profile</h2>
            <div className="mt-5 space-y-2">
              <div className="flex space-x-2">
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                />
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Phone"
                />
              </div>

              <input type="text" className="input w-full" placeholder="Email" />

              <div className="flex justify-center">
                <button className="btn-dark">Update</button>
              </div>
            </div>
          </div>
          <div className=" bg-white p-4 mt-5 drop-shadow-md">
            <h2 className="font-bold text-2xl text-center">Change Password</h2>
            <div className="mt-5 space-y-2  pt-2 ">
              <input
                type="text"
                className="input w-full"
                placeholder="Old Password"
              />
              <input
                type="text"
                className="input w-full"
                placeholder="New Password"
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Confirm New Password"
              />

              <div className="flex justify-center">
                <button className="btn-dark">Change</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
