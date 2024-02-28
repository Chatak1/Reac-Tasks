import react from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

// Task 1:

  let sid= 21;
  let sname= "Raj";
  let course= "React";
  let age = 22;
  let total= 34;


// Task 2

let doctors = [{doctorId:1,  doctorName:"Arnav Sharma",  designation:"Sr. Doctor",  experience:"10",  contactNumber:"9972881133"},
{doctorId:1,  doctorName:"Arnav Sharma",  designation:"Sr. Doctor",  experience:"8",  contactNumber:"8872351133"},
{doctorId:2,  doctorName:"Yash Fulzele",  designation:"Jr. Doctor",  experience:"3",  contactNumber:"9322881133"},
{doctorId:3,  doctorName:"Raj Rajput",  designation:"Assistant Doctor",  experience:"1",  contactNumber:"7492881133"},
{doctorId:4,  doctorName:"Aditya Faye",  designation:"Sergen",  experience:"6",  contactNumber:"9728816344"},
{doctorId:5,  doctorName:"Krishna Kumar",  designation:"Helper",  experience:"7",  contactNumber:"8825881133"},
{doctorId:6,  doctorName:"Pratyoosh Anand",  designation:"Nurse",  experience:"22",  contactNumber:"7788881133"}];


let loop1 = doctors.map(item=>{
  return<tr> 
    <td>{item.doctorId}</td>
    <td>{item.doctorName}</td>
    <td>{item.designation}</td>
    <td>{item.experience}</td>
    <td>{item.contactNumber}</td>
    </tr>;
  
});

return(

 <>
  <h3>Task  1</h3>

  <table border="">
    <tr><th colSpan="2">Details of the Student</th></tr>
    <tr><td >Student Id </td> <td>{sid}</td></tr>
    <tr><td>Student Name   </td> <td>{sname}</td></tr>
    <tr><td>Course</td> <td>{course}</td></tr>
    <tr><td>Age</td> <td>{age}</td></tr>
    <tr><td>Total</td> <td>{total}</td></tr>
  </table>

  <hr></hr>

  <h3>Task  2</h3>

  <table border={1}>
    <tr>
      <th>Doctor Id </th>
      <th>Doctor Name </th>
      <th>Doctor Designation </th>
      <th>Doctor Experience </th>
      <th>Doctor Contact Number </th>
    </tr>
    {loop1}
  </table>
  </>
);
}

export default App;
