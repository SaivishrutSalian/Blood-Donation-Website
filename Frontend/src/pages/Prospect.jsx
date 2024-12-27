
const Prospect = () => {
  return (
    <div className="flex item-center justify-center min-h-screen">
      <div className="m-[20px] h-[80vh] w-[450px] shadow-lg">
        <h2 className="font-semibold m-[30px]">Prospect</h2>
        <ul className="m-[30px]">
          <li className="mt-[14px]">
            <strong>Name: </strong> John Doe
          </li>
          <li className="mt-[14px]">
            <strong>Address: </strong>123 Downtown, Mumbai
          </li>
          <li className="mt-[14px]">
            <strong>Tel: </strong>(+91) 5845554211
          </li>
          <li className="mt-[14px]">
            <strong>BloodType: </strong>Unknown
          </li>
          <li className="mt-[14px]">
            <strong>Diseases: </strong>None
          </li>
          <li className="mt-[14px]">
            <strong>Date: </strong>27/12/2024
          </li>
          <li className="mt-[14px]">
            <strong>Weight: </strong>50kg
          </li>
          <li className="mt-[14px]">
            <strong>Status: </strong>Pending
          </li>
        </ul>
        <span className="block m-[10px]"> Do you want to approve James to a Donor?</span>
        <button className="bg-red-500 text-white cursor-pointer p-[5px] w-[150px] m-[10px]">Approve</button>
      </div>
    </div>
  )
}

export default Prospect