import Navbar from "./Navbar";
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddUser=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee ={name,quantity,supplier,taste,category,details,photo}
        console.log(coffee)

        fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(coffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            Swal.fire({
                title: 'Success!',
                text: 'New Coffee added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        })
    }
    return (
        <div className="max-w-4xl mx-auto space-y-7">
            <Navbar></Navbar>
            <h2 className="text-3xl font-semibold space-y-7 text-center">Add Coffee</h2>
            <form onSubmit={handleAddUser} className="max-w-3xl mx-auto">
                {/* coffee name and quantity */}
                <div className="flex justify-around">              
                    <div className="join name">                       
                        <button className="btn join-item rounded-r-full">Name</button>
                        <input type="text" name="name" className="input input-bordered join-item" placeholder="Coffee Name" />
                    </div>
                    
                    <div className="join quantity">
                        <button className="btn join-item rounded-r-full">Quantity</button>
                        <input type="number" name="quantity" className="input input-bordered join-item" placeholder="Quantity Number" />
                    </div>
                </div>
                {/* coffee supplier and test */}
                <div className="flex justify-around mt-10">              
                    <div className="join name">                       
                        <button className="btn join-item rounded-r-full">Supplier</button>
                        <input type="text" name="supplier" className="input input-bordered join-item" placeholder="Supplier Name" />
                    </div>
                    
                    <div className="join quantity">
                        <button className="btn join-item rounded-r-full">Taste</button>
                        <input type="text" name="taste" className="input input-bordered join-item" placeholder="Taste" />
                    </div>
                </div>
                {/* coffee supplier and test */}
                <div className="flex justify-around mt-10">              
                    <div className="join name">                       
                        <button className="btn join-item rounded-r-full">Category</button>
                        <input type="text" name="category" className="input input-bordered join-item" placeholder="Category" />
                    </div>
                    
                    <div className="join quantity">
                        <button className="btn join-item rounded-r-full">Details</button>
                        <input type="text" name="details" className="input input-bordered join-item" placeholder="Details" />
                    </div>
                </div>
                {/* coffee photo */}
                <div className="mt-10 text-center">              
                    <div className="join name">                       
                        <button className="btn join-item rounded-r-full">Photo</button>
                        <input type="text" name="photo" className="input input-bordered join-item" placeholder="Photo-url" />
                    </div>
                   
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block mt-5" />
            </form>
        </div>
    );
};

export default AddCoffee;