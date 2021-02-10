import React, { useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux'; 
import { fetchCars } from '../redux/cars/carActions';

// interface HomeProps {
//     cars : any,
//     error? : string
// }

function Home() {
    const custom = {
        width: "300px"
    }; 
    const cars = useSelector((state : any) => state.cars)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCars())
    }, [])

    return(
        <div className="container"> 
          {(cars.length == 0) ? (
              <div className="p-3 mb-2 bg-white text-dark">There aren't cars to display</div>
          ) : (
              <div className="row">
                  <ul className="list-group">
                    {
                        cars.map((item :any, index : number) => (
                            <li className="list-group-item" key={"item-"+index}>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="vehicle-image">
                                        <img src={item.image} className="img-thumbnail" style={custom}></img>
                                    </div>
                                    <div className="column-1 flex-1 d-flex flex-column">
                                        <div className="d-flex flex-column">
                                            <b>Vehicle Id:</b>
                                            <span>{item.id}</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <b>Make:</b>
                                            <span>{item.make}</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <b>Model:</b>
                                            <span>{item.model}</span>
                                        </div>
                                    </div>
                                    <div className="column-1 flex-1 d-flex flex-column">
                                        <div className="d-flex flex-column">
                                            <b>Description:</b>
                                            <span>{item.description}</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <b>Estimated Date:</b>
                                            <span>{item.estimatedate}</span>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <b>Kilometers:</b>
                                            <span>{item.km}</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                    ) )}
                  </ul>
              </div>
          )}
        </div>
    );
}


// const mapStateToProps = (state : any) => {
//     return {
//         cars : state.cars,
//         error : state.error
//     }
// }

// const mapDispatchToProps = (dispatch:any) => {
//     return {
        
//     }
// }

export default Home;