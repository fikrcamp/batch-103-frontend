import AdminNav from "../../Components/AdminNav";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
function RestaurantDetails() {
  const [inputs, setInputs] = useState();
  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      //formdata
      const formData = new FormData();
      formData.append("name", inputs.name);
      formData.append("phone", inputs.phone);
      formData.append("address", inputs.address);
      formData.append("city", inputs.city);
      formData.append("description", inputs.description);
      formData.append("image", inputs.image);

      const token = localStorage.getItem("token");
      const res = await axios.post(
        "http://localhost:8000/restaurant",
        formData,
        {
          headers: { authentication: token },
        }
      );
      console.log(res);
      toast.success("Create Restaurant");
    } catch (e) {
      toast.error("Error");
    }
  }
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
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Phone"
                onChange={(e) =>
                  setInputs({ ...inputs, phone: e.target.value })
                }
              />
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant Address"
                onChange={(e) =>
                  setInputs({ ...inputs, address: e.target.value })
                }
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Restaurant City"
                onChange={(e) => setInputs({ ...inputs, city: e.target.value })}
              />
            </div>
            <textarea
              className="input w-full"
              placeholder="Restaurant Description"
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
            ></textarea>
            <input
              type="file"
              onChange={(e) =>
                setInputs({ ...inputs, image: e.target.files[0] })
              }
            />
            <div className="flex justify-center">
              <button className="btn-dark" onClick={(e) => handleOnSubmit(e)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantDetails;
