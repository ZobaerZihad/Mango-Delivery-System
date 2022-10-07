import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMangoById, updateMango } from "../../actions/mangoAction";
import Loader from "./../Loader";
import Error from "./../Error";

const EditMango = ({ match }) => {
  const [name, setname] = useState("");
  const [smallPrice, setsmallPrice] = useState();
  const [largprice, setlargprice] = useState();
  const [mediumPrice, setmediumPrice] = useState();
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const dispatch = useDispatch();
  const getMangoByState = useSelector((state) => state.getMangoByIdReducer);
  const { error, mango } = getMangoByState;
  const updateMangoState = useSelector((state) => state.updateMangoByIdReducer);
  const { updateloading } = updateMangoState;
  useEffect(() => {
    if (mango) {
      if (mango._id === match.params.mangoId) {
        setname(mango.name);
        setdescription(mango.description);
        setcategory(mango.category);
        setimage(mango.image);
        setsmallPrice(mango.prices[0]["kgs_20"]);
        setmediumPrice(mango.prices[0]["kgs_40"]);
        setlargprice(mango.prices[0]["kgs_80"]);
      } else {
        dispatch(getMangoById(match.params.mangoId));
      }
    } else {
      dispatch(getMangoById(match.params.mangoId));
    }
  }, [mango, dispatch, match.params.mangoId]);
  const submitForm = (e) => {
    e.preventDefault();
    const updatedMango = {
      _id: match.params.mangoId,
      name,
      image,
      description,
      category,
      prices: {
        kgs_20: smallPrice,
        kgs_40: mediumPrice,
        kgs_80: largprice,
      },
    };
    dispatch(updateMango(updatedMango));
  };
  return (
    <div>
      {updateloading && <Loader />}
      {error && <Error error="add new mango error" />}
      {/* {success && <Success success="Pizza Added Successfully" />} */}
      <Form onSubmit={submitForm} className="bg-light p-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter email"
            />
          </Form.Group>
          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Small Price</Form.Label>
              <Form.Control
                type="text"
                value={smallPrice}
                onChange={(e) => setsmallPrice(e.target.value)}
                placeholder="Enter Small Price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Medium Price</Form.Label>
              <Form.Control
                type="text"
                value={mediumPrice}
                onChange={(e) => setmediumPrice(e.target.value)}
                placeholder="Enter medium price"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Larg Price</Form.Label>
              <Form.Control
                type="text"
                value={largprice}
                onChange={(e) => setlargprice(e.target.value)}
                placeholder="Enter larg price"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control
              ttype="text"
              value={image}
              onChange={(e) => setimage(e.target.value)}
              placeholder="Add Image URL"
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Enter Description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            value={category}
            onChange={(e) => setcategory(e.target.value)}
            placeholder="Enter Category"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update Mango
        </Button>
      </Form>
    </div>
  );
};

export default EditMango;