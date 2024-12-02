import { CiRead } from "react-icons/ci";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
    const { name, photo, taste, details, supplier, category, quantity } = coffee
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
                    <button className="btn join-item bg-pink-400"><MdModeEditOutline /></button>
                    <button className="btn join-item bg-red-400"><MdDelete /></button>
             
            </div>
        </div>
    );
};

export default CoffeeCard;