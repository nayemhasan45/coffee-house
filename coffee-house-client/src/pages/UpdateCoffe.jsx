import React from "react";
import Navber from "../components/Navber";
import bg from "../assets/images/more/11.png";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const coffeeData = useLoaderData();
  console.log(coffeeData);
  const { name, price, details, category, photo, supplier, taste, _id } =
    coffeeData;
  const navigate = useNavigate();
  const handleUpdata = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    console.log(formData);
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        fetch(`https://coffee-house-server-rho.vercel.app/coffees/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.matchedCount){
              Swal.fire("Saved!", "", "success").then(()=>{
                navigate("/");
              });
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Navber></Navber>
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Form Container */}
          <div className="bg-[#F4F3F0] rounded-lg px-8 md:px-24 py-12 md:py-16">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="font-serif text-[#374151] text-4xl md:text-5xl mb-6">
                Update Coffee
              </h1>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdata}>
              <div className="space-y-6">
                {/* Row 1: Name and price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div>
                    <label className="block text-[#1B1A1A] text-xl font-semibold mb-4">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      placeholder="Enter coffee name"
                      className="w-full px-5 py-4 rounded-lg bg-white text-[#1B1A1A] placeholder-gray-400 focus:outline-none text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1B1A1A] text-xl font-semibold mb-4">
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      defaultValue={price}
                      placeholder="Enter coffee price"
                      className="w-full px-5 py-4 rounded-lg bg-white text-[#1B1A1A] placeholder-gray-400 focus:outline-none text-base"
                    />
                  </div>

                  {/* Row 2: Supplier and Taste */}
                  <div>
                    <label className="block text-[#1B1A1A] text-xl font-semibold mb-4">
                      Supplier
                    </label>
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      placeholder="Enter coffee supplier"
                      className="w-full px-5 py-4 rounded-lg bg-white text-[#1B1A1A] placeholder-gray-400 focus:outline-none text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1B1A1A] text-xl font-semibold mb-4">
                      Taste
                    </label>
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      placeholder="Enter coffee taste"
                      className="w-full px-5 py-4 rounded-lg bg-white text-[#1B1A1A] placeholder-gray-400 focus:outline-none text-base"
                    />
                  </div>

                  {/* Row 3: Category and Details */}
                  <div>
                    <label className="block text-[#1B1A1A] text-xl font-semibold mb-4">
                      Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
                      placeholder="Enter coffee category"
                      className="w-full px-5 py-4 rounded-lg bg-white text-[#1B1A1A] placeholder-gray-400 focus:outline-none text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1B1A1A] text-xl font-semibold mb-4">
                      Details
                    </label>
                    <input
                      type="text"
                      name="details"
                      defaultValue={details}
                      placeholder="Enter coffee details"
                      className="w-full px-5 py-4 rounded-lg bg-white text-[#1B1A1A] placeholder-gray-400 focus:outline-none text-base"
                    />
                  </div>
                </div>

                {/* Row 4: Photo URL */}
                <div>
                  <label className="block text-[#1B1A1A] text-xl font-semibold mb-4">
                    Photo
                  </label>
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    placeholder="Enter photo URL"
                    className="w-full px-5 py-4 rounded-lg bg-white text-[#1B1A1A] placeholder-gray-400 focus:outline-none text-base"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <input
                    className="w-full py-4 rounded-lg bg-[#D2B48C] hover:border-2 border-[#331A15] text-[#331A15] font-serif text-2xl hover:bg-[#C19A6B] transition-all duration-300"
                    type="submit"
                    value="Update Coffee"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffe;
