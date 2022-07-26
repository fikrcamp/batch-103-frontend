import AdminNav from "../../Components/AdminNav";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function MenuForm() {
  const { id } = useParams();
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/menu/${id}`)
      .then((res) => setInputs(res.data.menu));
  }, []);

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

  function handleOnEdit() {
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("price", inputs.price);
    formData.append("description", inputs.description);
    formData.append("category", inputs.category);
    formData.append("image", inputs.image);
    try {
      axios.put(`http://localhost:8000/menu/${id}`, formData);
      toast.success("edited menu item");
      navigate("/admin/menu");
    } catch (e) {
      toast.error("Error");
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
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
              <input
                type="text"
                className="input w-full"
                placeholder="Price"
                value={inputs.price}
                onChange={(e) =>
                  setInputs({ ...inputs, price: e.target.value })
                }
              />
            </div>
            <textarea
              className="input w-full"
              placeholder="Menu Description"
              value={inputs.description}
              onChange={(e) =>
                setInputs({ ...inputs, description: e.target.value })
              }
            ></textarea>

            <select
              className="input w-full"
              value={inputs.category}
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
              {id ? (
                <button className="btn-dark" onClick={handleOnEdit}>
                  Edit
                </button>
              ) : (
                <button className="btn-dark" onClick={handleOnSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuForm;
