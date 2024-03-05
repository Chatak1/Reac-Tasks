import axios from "axios";
import { useState } from "react";

function Axios2() {
    const [customerArray, setCustomerArray] = useState([]);

    function buttonClick() {
        // alert("hi")
        let url = "https://reqres.in/api/users/";
        axios.get(url).then(resData => {
            //statements for resData
            console.log(resData.data.data);
            setCustomerArray(resData.data.data);
        });
    }

    var resultArray = customerArray.map((item, index) => {
        return(
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.avatar}</td>
        </tr>
        );
    });

    return (
        <>
            <button onClick={buttonClick} value={"abc"}/>

            <hr>
            </hr>

            <table border={1}>
                <tr>
                    <th>ID</th>
                    <th>Email </th>
                    <th>Location</th>
                    <th>Somethin</th>
                    <th>lksaflk</th>
                </tr>
                {resultArray}
            </table>
        </>

    );

}
export default Axios2;