

const NewDonor = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="m-[20px] p-[20px] h-[80vh] w-[250px]">
        <h2 className="font-semibold">New Donor</h2>
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="James Doe"
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] mt-[10px] w-[300px]"
          />
          <label htmlFor="">Address</label>
          <input type="text" placeholder="123, Downtown, Mumbai"
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
          <label htmlFor="">Tel</label>
          <input type="text" placeholder="(+91) 95222000223"
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
          <label htmlFor="" className="font-semibold">BloodGroup</label>
          <select className="w-[300px] p-[15px]" >
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
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
        </div>
      </div>
      <div className="m-[70px] p-[44px] h-[80vh] w-[250px]">
        <div className="flex flex-col my-[12px]">
          <label htmlFor="">Weight</label>
          <input type="Number" placeholder="50kg"
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
          <label htmlFor="">Date</label>
          <input type="date" placeholder="27/12/2024"
            className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]"
          />
          <label htmlFor="" className="text-[18px] mt-[10px] font-semibold">Do you have any diseases?</label>
          <textarea type="Number" className="border-[#555] border-2 border-solid p-[10px] mt-[10px] mb-[10px] w-[300px]" placeholder="N/A" />

          <button className="bg-[#444] cursor-pointer text-white p-[10px] w-[300px] my-[10px]"> Create</button>
        </div>
      </div>
    </div>
  )
}

export default NewDonor