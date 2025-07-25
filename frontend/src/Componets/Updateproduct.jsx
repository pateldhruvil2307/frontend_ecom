import React , {useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';


const UpdateProduct=()=>{

const [name,setname]=useState("")
const [price ,setprice]=useState("")
const [brand,setbrand]=useState("")
const [image,setimage]=useState("")

const params=useParams()
const navigate=useNavigate()


useEffect(()=>{
   getProductDetails();
},[])



    const getProductDetails = async () => {
        console.log(params)
      let result = await fetch(`http://localhost:3000/product/${params.id}`);
      result = await result.json();
 console.log(result)
      setname(result.name);
      setprice(result.price);
      setbrand(result.brand);
      setimage(result.image);
    };


  const updateproduts = async () => {
      let result=await fetch(`http://localhost:3000/product/${params.id}`, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body :JSON.stringify({name,price,brand,image}),
            });     
            result = await result.json();
            console.log("api result:",result)
            alert("Product added successfully");
            navigate('/product')
  };
          


    return(
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300">
      <div className="bg-white p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          update  product
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setname(e.target.value)}
          value={name}
          className="w-full px-4 py-3 mb-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Enter your price"
          onChange={(e) => setprice(e.target.value)}
          value={price}
          className="w-full px-4 py-3 mb-5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Enter your brand name "
          onChange={(e) => setbrand(e.target.value)}
          value={brand}
          className="w-full px-4 py-3 mb-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        
        <input
          type="text"
          placeholder="Enter your image url"
          onChange={(e) => setimage(e.target.value)}
          value={image}
          className="w-full px-4 py-3 mb-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="button"
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          onClick={updateproduts}
        >
          Submit
        </button>

      </div>
    </div>
        

    )
}

export default UpdateProduct;