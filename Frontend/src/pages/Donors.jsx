import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Donors = () => {
  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 90 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "bloodgroup", headerName: "BloodType", width: 130 },
    { field: "diseases", headerName: "Diseases", width: 150 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => {
        return (
          <>
            <Link to={`/admin/donor/123`}>
              <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                Edit
              </button>
            </Link>
          </>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: () => {
        return (
          <>
            <FaTrash
              className="text-red-500 cursor-pointer m-2"
            />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 2,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 3,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 4,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 5,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 6,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 7,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 8,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 9,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
    {
      id: 10,
      name: "John Doe",
      address: "123 Main St, AnyTown, USA",
      bloodType: "A+ ",
      disease: "Diabetes"
    },
  ];
  return (
    <div className="w-[70vw]">
      <div className="flex items-center justify-between m-[30px]">
        <h1 className="m-[20px] text-[20px] font-semibold">All Donors</h1>
        <Link to='/admin/newdonor'>
        <button className="bg-[#1e1e1e] text-white p-[10px] cursor-pointer font-semibold">New Donor</button>
        </Link>
      </div>

      <div className="m-[30px]">
        <DataGrid checkboxSelection rows={rows} columns={columns} />
      </div>
    </div>
  )
}

export default Donors