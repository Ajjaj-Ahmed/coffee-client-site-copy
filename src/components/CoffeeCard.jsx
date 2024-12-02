import { CiRead } from "react-icons/ci";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    const { _id, name, photo, taste, details, supplier, category, quantity } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaingCoffee = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remaingCoffee)

                        }


                    })

            }
        });
    }

    return (
        <div className="flex justify-between items-center  bg-gray-100 p-4 rounded-xl">
            <figure>
                <img className="w-full h-52"
                    src={photo}
                    alt="Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Supplier: {supplier}</p>
                <p>{details}</p>
            </div>

            <div className="join join-vertical gap-2 ">
                <button className="btn join-item bg-green-300"><CiRead /></button>
                <Link to={`updateCoffee/${_id}`}> <button className="btn join-item bg-pink-400"><MdModeEditOutline /></button></Link>
                <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-400"><MdDelete /></button>

            </div>
        </div>
    );
};

export default CoffeeCard