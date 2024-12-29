import { useState } from "react"
import { publicRequest } from "../requestMethods.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewDonor = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleDonors = async () => {
    try {
        await publicRequest.post("/donors", inputs);
        toast.success("Donor has been successfully added to the database");
        setInputs({});
      
    } catch (error) {
      toast.warning(error.message);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[250px]">
        <h2 className="font-semibold">New Donor</h2>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="James Doe"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] mt-[10px] w-[300px]"
          />
          <label htmlFor="">Address</label>
          <input type="text" placeholder="123, Downtown, Mumbai"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
          <label htmlFor="">Tel</label>
          <input type="Number" placeholder="(+91) 95222000223"
            name="tel"
            value={inputs.tel || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
          <label htmlFor="" className="font-semibold">BloodGroup</label>
          <select className="w-[300px] p-[15px]"
            name="bloodgroup"
            value={inputs.bloodgroup || ""}
            onChange={handleChange}
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="jamesdoe@gmail.com"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
        </div>
      </div>
      <div className="m-[70px] p-[44px] h-[80vh] w-[250px]">
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Weight</label>
          <input type="Number" placeholder="50kg"
            name="weight"
            value={inputs.weight || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
          <label htmlFor="">Date</label>
          <input type="date" placeholder="27/12/2024"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
          <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Do you have any diseases?</label>
          <textarea type="Number" className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
            name="diseases"
            value={inputs.diseases || ""}
            onChange={handleChange}
            placeholder="N/A" />

          <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px] my-[10px]" onClick={handleDonors}> Create</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}

export default NewDonor