import React from 'react';
import {FcPicture} from 'react-icons/fc';
import { Redirect } from 'react-router-dom';



class ListingForm extends React.Component {

    state = {
        error: false,
        success: false,
            title: '',
            city: '',
     
            zipcode: '',
        //    img:'',
             price: '',
            make: '',
            modelname:'',
          category: '',
            description:'',
      }

      contentChanged = (name) => {
        return (event) => {
          let { value } = event.target;
          this.setState({ [name]: value });
        }
      }
      handleChange(event) {
        this.setState({
          img: URL.createObjectURL(event.target.files[0])
        })
      }
      savePost = (e) => {
        e.preventDefault();
        // get form data out of state
      //  title,city,zipcode,price,make,modelname,description
        const { title,city,zipcode,description,price,make,modelname,category,img} = this.state;
        fetch("/api/posts/", {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state),
        })
          .then(res => {
            if(res.ok) {
              return res.json()
            }
    
            throw new Error('Content validation');
          })
          .then(post => {
            this.setState({
              success: true,
            });
          })
          .catch(err => {
            this.setState({
              error: true,
            });
          });
      }
    
      render() {
        if(this.state.success) return <Redirect to="/" />;
    
        let errorMessage = null;
        if(this.state.error) {
          errorMessage = (
            <div className="alert alert-danger">
              "There was an error saving this post."
            </div>
          );
        }
    

    return (
        <div className="d-flex justify-content-center">
              <div className="col-6 p-lg-5">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Create a posting</h1>
                        <div className="form-floating mb-4">
                            <input
                            name = "title"
                            type="email" className="form-control" id="floatingInput" 
                            placeholder="name"
                            value={this.state.title}
                            onChange={this.contentChanged('title')} />
                            <label for="floatingInput">Title</label>
                        </div>
    
                    <div className="row">
                            <div className="col-lg-3">
                                <div className="form-floating mb-4">
                                    <input name = "price" type="text" className="form-control" id="floatingInput" placeholder="name" 
                                    value={this.state.price}
                                    onChange={this.contentChanged('price')}
                                    />
                                    <label for="floatingInput">Price</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-floating mb-4">
                                    <input name = "city" type="email" className="form-control" id="floatingInput" placeholder="name"
                                     value={this.state.city}
                                     onChange={this.contentChanged('city')} />
                                    <label for="floatingInput">City</label>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-floating mb-4">
                                    <input name= "zipcode" type="email" className="form-control" id="floatingInput" placeholder="name"  value={this.state.zipcode}
                                     onChange={this.contentChanged('zipcode')} />
                                    <label for="floatingInput">Zip</label>
                                </div>
                            </div>
                    </div>
    
                    <div className="row">
                            <div className="col-lg-6 ">
                            <div class="form-floating mb-4">
                            <input name= "category" type="email" className="form-control" id="floatingInput" placeholder="name"  value={this.state.category}
                                     onChange={this.contentChanged('category')} />
                                    <label for="floatingInput">Category</label>
                              
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="form-floating mb-4">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
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
                                    <input name = "make" type="email" className="form-control" id="floatingInput" placeholder="name" 
                                     value={this.state.make}
                                     onChange={this.contentChanged('make')}/>
                                    <label for="floatingInput">Brand / Manufacturer</label>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-floating mb-4">
                                    <input name = "modelname" type="email" className="form-control" id="floatingInput" placeholder="name"
                                     value={this.state.modelname}
                                     onChange={this.contentChanged('modelname')} />
                                    <label for="floatingInput">Model name / Number</label>
                                </div>
                            </div>
                    </div>
    
                      <div class="form-floating ">
                          <textarea name = "description" class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea2"
                           value={this.state.description}
                           onChange={this.contentChanged('description')} ></textarea>
                          <label for="floatingTextarea2">Description</label>
                      </div>
    
                      <div class="mb-4">
                          <label for="formFileMultiple" class="form-label"><FcPicture size /></label>
                          <input name = "img"class="form-control p-3 w-50" type="file" id="formFileMultiple" onChange={this.handleChange}
                           />
                           <img src={this.state.file}/>
                      </div>
    
                    <div className="d-flex justify-content-center mb-5">
                        <button className="w-100 btn btn-lg  btn-dark "onClick={this.savePost}  type="submit">Preview</button>
                    </div>
                </form>
                </div>
        </div>
      );
    }
  


}

export default ListingForm;
