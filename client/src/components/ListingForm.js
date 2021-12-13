import React from 'react';
import { Redirect } from 'react-router-dom';
import {FcPicture} from 'react-icons/fc';
import { AuthContext } from '../context/AuthContext'; // needed for posting and saving to a database


class ListingForm extends React.Component {
    state={
        redirectToReferrer: false,
        failed: false,
        categories: [],
        title: "",
        price: 0,
        city: "",
        // img: "",
        zipcode: 0,
        make: "",
        modelname: "",
        description: "",
        category: ""
    }

    getCategories = () => {
        let initialCategories = [];
        return fetch('/api/categories/')
        .then(response => {
            return response.json();
        }).then(data => {
        initialCategories = data.map((category) => {
            return category
        });
        this.setState({
            categories: initialCategories,
            });
        });
    }
    fieldChanged = (name) => {
        return (event) => {
            let { value } = event.target;
            this.setState({ [name]: value });
        }
    }
    create = (e) => {
        e.preventDefault();
        const auth = this.context;
        let {
            title,
            price,
            city,
            img,
            zipcode,
            category,
            make,
            modelname,
            description
        } = this.state;
        // this should work ?
        // userid,title,city,img,zipcode,category,price,make,modelname, contact_email, description
        auth.createPost(auth.user.userid, title, city, null, zipcode, category, price, make, modelname, auth.user.contact_email, description)
        .then((success) => {
          this.setState({ redirectToReferrer: true });
        })
        .catch((err) => {
          this.setState({ failed: true });
        });
    }
    render(){
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, failed } = this.state;
        
        
        if (redirectToReferrer) {
            return <Redirect to={'/dashboard'} />;
        }
        let err = "";
        if (failed) {
            err = <div className="alert alert-danger" role="alert">Login Failed</div>;
        }
        let cat = this.state.categories;
        let categoryOptions = cat.map((category) => 
            <option value={category.category}>{category.category}</option>
        );

        return (
        <div className="d-flex justify-content-center">
          <div className="col-6 p-lg-5">
            <form action={this.getCategories()} onSubmit={this.create}>
                <h1 className="h3 mb-3 fw-normal">Create a posting</h1>
                    <div className="form-floating mb-4">
                        <input
                            name="title"
                            value={this.state.title}
                            onChange={this.fieldChanged('title')}
                            type="text" className="form-control" id="floatingInput"/>
                        <label for="floatingInput">Title</label>
                    </div>

                <div className="row">
                        <div className="col-lg-3">
                            <div className="form-floating mb-4">
                                <input
                                name="price"
                                value={this.state.price}
                                onChange={this.fieldChanged('price')}
                                type="number" className="form-control" id="floatingInput"/>
                                <label for="floatingInput">Price</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-4">
                                <input
                                name="city"
                                value={this.state.city}
                                onChange={this.fieldChanged('city')}
                                type="text" className="form-control" id="floatingInput"/>
                                <label for="floatingInput">City</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating mb-4">
                                <input
                                name="zipcode"
                                value={this.state.zipcode}
                                onChange={this.fieldChanged('zipcode')}
                                type="number" className="form-control" id="floatingInput"/>
                                <label for="floatingInput">Zip</label>
                            </div>
                        </div>
                </div>

                <div className="row">
                        <div className="col-lg-6 ">
                        <div class="form-floating mb-4">
                            <select
                                name="categorySelect"
                                onChange={this.fieldChanged('category')}
                                className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                {categoryOptions}
                            </select>
                            <label for="floatingSelect">Select your Category</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating mb-4">
                                <input type="text" className="form-control" id="floatingInput"/>
                                <label for="floatingInput">Size / lb</label>
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                        <div class="form-floating mb-4">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Condition</option>
                                <option value="1">Used</option>
                                <option value="2">New</option>
                                <option value="3">refurbish</option>
                            </select>
                            <label for="floatingSelect">Select</label>
                            </div>
                        </div>
                </div>
                
                <div className="row">
                        <div className="col-lg-6">
                            <div className="form-floating mb-4">
                                <input
                                name="make"
                                value={this.state.make}
                                onChange={this.fieldChanged('make')}
                                type="text" className="form-control" id="floatingInput"/>
                                <label for="floatingInput">Brand / Manufacturer</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-4">
                                <input
                                name="modelname"
                                value={this.state.modelname}
                                onChange={this.fieldChanged('modelname')}
                                type="text" className="form-control" id="floatingInput"/>
                                <label for="floatingInput">Model name / Number</label>
                            </div>
                        </div>
                </div>

                  <div class="form-floating ">
                      <textarea
                      name="description"
                      value={this.state.description}
                      onChange={this.fieldChanged('description')}
                      class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                      <label for="floatingTextarea2">Description</label>
                  </div>

                  {/* <div class="mb-4">
                      <label for="formFileMultiple" class="form-label"><FcPicture size /></label>
                      <input class="form-control p-3 w-50" type="file" id="formFileMultiple"  />
                  </div> */}
                <div className="d-flex justify-content-center mb-5">
                    <button className="w-100 btn btn-lg  btn-dark " type="submit">Preview</button>
                </div>
            </form>
            </div>
    </div>
  );
    }
}

ListingForm.contextType = AuthContext;
export default ListingForm;