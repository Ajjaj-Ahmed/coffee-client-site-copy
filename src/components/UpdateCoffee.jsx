import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, name, photo, taste, details, supplier, category, quantity } = coffee;
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee ={name,quantity,supplier,taste,category,details,photo}

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: ' Coffee updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
          
            
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-semibold text-center py-10">Update the {name}</h2>
            <form onSubmit={handleUpdate} className="max-w-3xl mx-auto mt-10">
                {/* coffee name and quantity */}
                <div className="flex justify-around">
                    <div className="join name">
                        <button className="btn join-item rounded-r-full">Name</button>
                        <input type="text" name="name" defaultValue={name} className="input input-bordered join-item" placeholder="Coffee Name" />
                    </div>

                    <div className="join quantity">
                        <button className="btn join-item rounded-r-full">Quantity</button>
                        <input type="number" name="quantity" defaultValue={quantity} className="input input-bordered join-item" placeholder="Quantity Number" />
                    </div>
                </div>
                {/* coffee supplier and test */}
                <div className="flex justify-around mt-10">
                    <div className="join name">
                        <button className="btn join-item rounded-r-full">Supplier</button>
                        <input type="text" name="supplier" defaultValue={supplier} className="input input-bordered join-item" placeholder="Supplier Name" />
                    </div>

                    <div className="join quantity">
                        <button className="btn join-item rounded-r-full">Taste</button>
                        <input type="text" name="taste" defaultValue={taste} className="input input-bordered join-item" placeholder="Taste" />
                    </div>
                </div>
                {/* coffee supplier and test */}
                <div className="flex justify-around mt-10">
                    <div className="join name">
                        <button className="btn join-item rounded-r-full">Category</button>
                        <input type="text" name="category" defaultValue={category} className="input input-bordered join-item" placeholder="Category" />
                    </div>

                    <div className="join quantity">
                        <button className="btn join-item rounded-r-full">Details</button>
                        <input type="text" name="details" defaultValue={details} className="input input-bordered join-item" placeholder="Details" />
                    </div>
                </div>
                {/* coffee photo */}
                <div className="mt-10 text-center">
                    <div className="join name">
                        <button className="btn join-item rounded-r-full">Photo</button>
                        <input type="text" name="photo" defaultValue={photo} className="input input-bordered join-item" placeholder="Photo-url" />
                    </div>

                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block bg-gray-600 mt-5" />
            </form>
        </div>
    );
};

export default UpdateCoffee;