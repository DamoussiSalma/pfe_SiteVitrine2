import "./reservationtable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import { useState } from "react";
const ReservationTables = () => {


  /*const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const userColumns = [
    { field: "id", headerName: "ID", width: 240 },
    {
      field: "Demandeur",
      headerName: "Demandeur",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "date",
      headerName: "Date Demande",
      width: 230,
    },

  ];*/
  
  //temporary data
  /*const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "1snow@gmail.com",
      date: "02/02/2024",
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      
      date: "02/02/2024",
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      date: "02/02/2024",
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
     
      date: "02/02/2024",
    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      
      date: "02/02/2024",
    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      date: "02/02/2024",
    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      date: "02/02/2024",
    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      date: "02/02/2024",
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      date: "02/02/2024",
    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      date: "02/02/2024",
    },
  ];*/
  //const [data, setData] = useState(userRows);
 /* const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
            <Button className="viewButton" > Accepter</Button>
            </Link>
            <Button
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}> Refuser</Button>
          </div>
        );
      },
    },
  ];*/
    return (
    <>
    <div className="containerr">
  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">Amount</div>
      <div className="col col-2">Customer Name</div>
      <div className="col col-3">Annonce</div>
      <div className="col col-4">StartDate</div>
      <div className="col col-5">EndDate</div>
      <div className="col col-4">Actions</div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">422 dt</div>
      <div className="col col-2 cellWithImg" data-label="Customer Name">
            <img className="cellImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlSA6OeLhxDwO5_TymyV7YAUdvrr3xSDTgxEwoCIpFA&s" alt="avatar" />
            John Doe
          </div>
      <div className="col col-3" data-label="Annonce">lorem</div>
      <div className="col col-5" data-label="StartDate">21/05/2024</div>
      <div className="col col-4" data-label="EndDate">21/05/2024</div>

      <div className="col col-4 cellAction" data-label="Actions">
        <Button className="viewButton" > Accepter</Button>
        <Button className="deleteButton"> Refuser</Button>
        </div>
    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">1244 dt</div>
      <div className="col col-2 cellWithImg" data-label="Customer Name">
            <img className="cellImg" src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" alt="avatar" />
            Jennifer Smith
          </div>
      <div className="col col-3" data-label="Customer Name">lorem</div>
      <div className="col col-4" data-label="StartDate">21/05/2024</div>
      <div className="col col-5" data-label="EndDate">21/05/2024</div>
      <div className="col col-4 cellAction" data-label="Payment Status">
      <Button className="viewButton" > Accepter</Button>
      <Button className="deleteButton"> Refuser</Button>
        </div>

    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">700 dt</div>
      <div className="col col-2 cellWithImg" data-label="Customer Name">
            <img className="cellImg" src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" alt="avatar" />
            John Doe
          </div>      <div className="col col-3" data-label="Customer Name">lorem</div>
      <div className="col col-4" data-label="StartDate">21/05/2024</div>
      <div className="col col-5" data-label="EndDate">21/05/2024</div>
      <div className="col col-4 cellAction" data-label="Payment Status">
        <Button className="viewButton" > Accepter</Button>
      <Button className="deleteButton"> Refuser</Button></div>

    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">800 dt</div>
      <div className="col col-2 cellWithImg" data-label="Customer Name">
            <img className="cellImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7HxzKKvBIkjKHsnqkVp-9MXfpoxiNKx7v6x8ks1ToA&s" alt="avatar" />
            Jennifer Smith
          </div>      <div className="col col-3" data-label="Customer Name">lorem</div>
      <div className="col col-4" data-label="StartDate">21/05/2024</div>
      <div className="col col-4" data-label="EndDate">21/05/2024</div>
      <div className="col col-4 cellAction" data-label="Payment Status">
      <Button className="viewButton" > Accepter</Button>
      <Button className="deleteButton"> Refuser</Button>
      </div>

    </li>
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">422 dt</div>
      <div className="col col-2 cellWithImg" data-label="Customer Name">
            <img className="cellImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRlSA6OeLhxDwO5_TymyV7YAUdvrr3xSDTgxEwoCIpFA&s" alt="avatar" />
            John Doe
          </div>
      <div className="col col-3" data-label="Annonce">lorem</div>
      <div className="col col-5" data-label="StartDate">21/05/2024</div>
      <div className="col col-4" data-label="EndDate">21/05/2024</div>

      <div className="col col-4 cellAction" data-label="Actions">
        <Button className="viewButton" > Accepter</Button>
        <Button className="deleteButton"> Refuser</Button>
        </div>
    </li>
  </ul>
</div>
    </> );
}
 
export default ReservationTables;