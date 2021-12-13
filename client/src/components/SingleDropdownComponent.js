import React from 'react';
import { Link } from 'react-router-dom';

<<<<<<< Updated upstream
function SingleDropdownComponent({title, desc}) {
  return (
      <li className="nav-item dropdown dropdown-menu-block pb-1">
          <a className="nav-link dropdown-toggle text-white" href="#" id="mega-menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">{title} </a>
          <ul className="dropdown-menu dropdown-mega-menu-block bg-dark p-5" aria-labelledby="mega-menu">
            <div className="row" >
            <li className="col-lg-3 col-md-3">
                <h3 className="text-white">Title Menu One</h3>
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>  
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3">
                <h3 className="text-white">Title Menu Two</h3>
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>  
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3">
                <h3 className="text-white">Title Menu One</h3>
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>  
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                </ul>
            </li>
            <li className="col-lg-3 col-md-3">
                <h3 className="text-white">Title Menu Two</h3>
                <ul>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>  
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                    <li><a className="dropdown-item text-white bg-transparent " href="#"><u>Francais</u></a></li>
                </ul>
            </li>
            </div>
          </ul>
      </li>
  );
}

export default SingleDropdownComponent;
=======
class SingleDropdownComponent extends React.Component{
    state={
        title: "",
        desc: "",
        currentData: [],
        limit: null,
        pulled: false
    }

    // getCategories = () => {
    //     this.setState({
    //         currentData: Object.values(Categories)[0].jobs,
    //     });
    //     }
    render(){
        // const getCategories = () => {
        //     if(this.state.pulled)
        //     this.setState({
        //         currentData: Object.values(Categories)[0].jobs,
        //         pulled: true,
        //         limit: Math.floor(this.state.currentData.length / 6)
        //     })
        // }
        return (
            <li className="nav-item dropdown dropdown-menu-block pb-1 ">
            <a className="nav-link dropdown-toggle text-white" href="#" id="mega-menu" role="button" data-bs-toggle="dropdown" aria-expanded="false">{this.props.title} </a>
            <ul className="dropdown-menu dropdown-mega-menu-block bg-dark p-5" aria-labelledby="mega-menu">
            {/* action={getCategories} */}
              <div  className="row mb-3" style={{height:"200px", textDecoration:"none"}}>
                  <h3 className="text-white">{this.props.title}</h3>
                      {/* {
                          Array.from(Array(limit), (e,i1) => {
                          })
                      } */}
              </div>
            </ul>
        </li>
        )
    }
}

export default SingleDropdownComponent;
  
// Array.from(Array(limit), (e,i1) => {
//     return <div className="col-lg-2 col-md-3 border m-3">
//         <ul>
//             {currentData.forEach((category, index) => {
//                     console.log(category);
//             })
//             }
//         </ul>                   
//     </div>

// currentData.forEach((value) =>{
//     // console.log("Current Value: ", value)

// })
>>>>>>> Stashed changes
