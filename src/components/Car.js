import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip, Pill } from '@material-ui/core';
// import {Link} from 'react-router-dom'


const Car = (props) => {

    const id = props.match.params.id;
    const specificCar = cars[id - 1];
    
    return (
        <div className="car-details-container">
            <Container maxWidth="sm">
                <div>
                    <Paper>
                    <h1>Car Number {id}</h1>
                    <h3>{specificCar.Name}</h3>
                    <h3>made in the {specificCar.Origin}</h3>
                            {
                                Object.keys(specificCar).map((key) => {
                                    return <Chip label={`${key}: ${specificCar[key]}`}></Chip>
                                })
                            }
                    </Paper>
                </div>
            </Container>
        </div>
    );

    
}



export default Car;





        // Notes 
        
        // replace the specific car
          // find the car by id props.match.params.id
            // loop over object
            // get key.values
            // display results
            // Due Tuesday May 26th
            // t - two days


                {/* {cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.Name.toUpperCase()}</span>
                        <ul>
                        <li>Miles_per_Gallon: {car["Miles_per_Gallon"]}</li>
                        <li>Cylinders: {car["Cylinders"]}</li>
                        <li>Displacement: {car["Displacement"]}</li>
                        <li>Horsepower: {car["Horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>See more Details</Link>
                    </CardActions>
                </Card> */}


                // const Car = (props) => {
                //     const id = props.match.params.id;
                //     const carInfo = cars[id - 1];
                //     return (
                //         <Container maxWidth="sm">
                //             <Paper>
                //                 <h1>A specific car: {id}</h1>
                //                 <h3>{carInfo.Name}</h3>
                //                 {
                //                     Object.keys(carInfo).map((key) => {
                //                         return <Chip label={`${key}: ${carInfo[key]}`}></Chip>
                //                     })
                //                 }
                //             </Paper>
                //         </Container>
                //     )
                // }



