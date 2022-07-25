import AdminNav from "../../Components/AdminNav";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MenuForm() {
  const [inputs, setInputs] = useState();
  const navigate = useNavigate();
  async function handleOnSubmit() {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("price", inputs.price);
    formData.append("description", inputs.description);
    formData.append("category", inputs.category);
    formData.append("image", inputs.image);
    try {
      const res = await axios.post("http://localhost:8000/menu", formData, {
        headers: { authentication: token },
      });
      toast.success(res.data.message);
      navigate("/admin/menu");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

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
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Price"
                onChange={(e) =>
                  setInputs({ ...inputs, price: e.target.value })
                }
              />
            </div>
            <textarea
              className="input w-full"
              placeholder="Menu Description"
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
            ></textarea>

            <select
              className="input w-full"
              onChange={(e) =>
                setInputs({ ...inputs, category: e.target.value })
              }
            >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
              <option value="fastfood">Fastfood</option>
            </select>
            <input
              type="file"
              onChange={(e) =>
                setInputs({ ...inputs, image: e.target.files[0] })
              }
            />
            <div className="flex justify-center">
              <button className="btn-dark" onClick={handleOnSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuForm;
