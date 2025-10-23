import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, handleDeleteParent }) => {
  // console.log(coffee);
  const { photo, name, price, category, _id } = coffee;

  // handle delete form db
  const handleDelete = (id) => {
    // console.log("clicked", id);
    // fetch(`http://localhost:3000/coffees`)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your Coffee has been deleted.",
              icon: "success",
            });
            // update in ui
            if (handleDeleteParent) {
              handleDeleteParent(id);
            }
          });
      }
    });
  };
  return (
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-[#F5F4F1] shadow-sm p-3 sm:p-4 rounded-lg">
      <figure className="w-24 h-24 sm:w-32 sm:h-32 shrink-0">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover rounded"
        />
      </figure>

      <div className="flex-1 text-center sm:text-left w-full sm:w-auto">
        <p className="text-xs sm:text-sm mb-1">
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p className="text-xs sm:text-sm mb-1">
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p className="text-xs sm:text-sm">
          <span className="font-semibold">Price:</span> {price}
        </p>
      </div>

      <div className="flex sm:flex-col gap-3 justify-center">
        <Link to={`/coffe-details/${_id}`}>
          <button className="bg-[#D2B48C] hover:bg-[#C19A6B] text-white p-2 rounded transition-colors">
            <Eye size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </Link>
        <Link to={`/update-coffe/${_id}`}>
          <button className="bg-[#3C3C3C] hover:bg-[#2C2C2C] text-white p-2 rounded transition-colors">
            <Pencil size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] hover:bg-[#D43835] text-white p-2 rounded transition-colors"
        >
          <Trash2 size={16} className="sm:w-[18px] sm:h-[18px]" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
