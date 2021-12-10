import React from 'react';
import {FcPicture} from 'react-icons/fc';


function ListingForm() {
  return (
    <div className="d-flex justify-content-center">
          <div className="col-6 p-lg-5">
            <form>
                <h1 className="h3 mb-3 fw-normal">Create a posting</h1>
                    <div className="form-floating mb-4">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Title</label>
                    </div>

                <div className="row">
                        <div className="col-lg-3">
                            <div className="form-floating mb-4">
                                <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Price</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-4">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">City</label>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="form-floating mb-4">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Zip</label>
                            </div>
                        </div>
                </div>

                <div className="row">
                        <div className="col-lg-6 ">
                        <div class="form-floating mb-4">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>Category</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="floatingSelect">Select your Category</label>
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
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Brand / Manufacturer</label>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-floating mb-4">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Model name / Number</label>
                            </div>
                        </div>
                </div>

                  <div class="form-floating ">
                      <textarea class="form-control h-100" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                      <label for="floatingTextarea2">Description</label>
                  </div>

                  <div class="mb-4">
                      <label for="formFileMultiple" class="form-label"><FcPicture size /></label>
                      <input class="form-control p-3 w-50" type="file" id="formFileMultiple"  />
                  </div>

                <div className="d-flex justify-content-center mb-5">
                    <button className="w-100 btn btn-lg  btn-dark " type="submit">Preview</button>
                </div>
            </form>
            </div>
    </div>
  );
}

export default ListingForm;