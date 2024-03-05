import './D1T5.css'

function  Demo()
{

    let  uesrsArray =  [
        {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"},
        {"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},
        {"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://reqres.in/img/faces/3-image.jpg"},
        {"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://reqres.in/img/faces/4-image.jpg"},
        {"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://reqres.in/img/faces/5-image.jpg"},
        {"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://reqres.in/img/faces/12-image.jpg"},
        ];

        let doctors = [{doctorId:1,  doctorName:"Arnav Sharma",  designation:"Sr. Doctor",  experience:"10",  contactNumber:"9972881133","avatar":"https://reqres.in/img/faces/7-image.jpg", rating:4},
        {doctorId:2,  doctorName:"Yash Fulzele",  designation:"Jr. Doctor",  experience:"3",  contactNumber:"9322881133","avatar":"https://reqres.in/img/faces/8-image.jpg",rating:4},
        {doctorId:3,  doctorName:"Raj Rajput",  designation:"Assistant Doctor",  experience:"1",  contactNumber:"7492881133","avatar":"https://reqres.in/img/faces/9-image.jpg",rating:4},
        {doctorId:4,  doctorName:"Aditya Faye",  designation:"Sergen",  experience:"6",  contactNumber:"9728816344","avatar":"https://reqres.in/img/faces/10-image.jpg",rating:4},
        {doctorId:5,  doctorName:"Krishna Kumar",  designation:"Helper",  experience:"7",  contactNumber:"8825881133","avatar":"https://reqres.in/img/faces/11-image.jpg",rating:4},
        {doctorId:6,  doctorName:"Pratyoosh Anand",  designation:"Nurse",  experience:"22",  contactNumber:"7788881133","avatar":"https://reqres.in/img/faces/12-image.jpg",rating:4}];
        
        const renderStars = (rating) => {
            const stars = [];
            for (let i = 0; i < rating; i++) {
                stars.push(<span key={i} style={{color:"green"}}>⭐</span>);
            }
            return stars;
        };

        let  resultsArray = doctors.map((item, index) => 
        {
            return <div  className='card' key={index}>                       
                        <img src={item.avatar}   /> <br/>
                        <span>{item.doctorId}</span>  <br/>
                        <span>{item.doctorName}</span>  <br/>
                        <span>{item.designation}</span>  <br/>
                        <p>{renderStars(item.rating)}</p>
                        <span className="email">{item.contactNumber}</span>  <br/>
                    </div>;
        });


    return (
        <>
			 <h3 style={  {color:"blue", border: "2px solid blue", padding:"5px", textAlign:"center"}  }>Applying Styles to React Components</h3>
             <hr/>


            {resultsArray}    

            
        </>
    );
}

export default Demo;