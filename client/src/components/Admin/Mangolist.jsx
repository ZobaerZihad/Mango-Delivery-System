import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Table } from "react-bootstrap";
import { deleteMango, getAllMangos } from "../../actions/mangoAction";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link } from "react-router-dom";

const Mangolist = () => {
  const dispatch = useDispatch();
  const mangostate = useSelector((state) => state.getAllMangoReducer);
  const { loading, mangos, error } = mangostate;
  console.log(mangos);
  useEffect(() => {
    dispatch(getAllMangos());
  }, [dispatch]);
  return (
    <>
      <h1>mangolist</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error>Error while fetching mangoes {error}</Error>
      ) : (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Mango Name</th>
                <th>Prices</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mangos &&
                mangos.map((mango) => (
                  <tr>
                    <td>
                      <img
                        src={mango.image}
                        alt="logo"
                        width="100px"
                        height="100px"
                      />
                    </td>
                    <td>{mango.name}</td>
                    <td>
                      Small : {mango.prices[0]["kgs_20"]} 
                      <br />
                      Medium : {mango.prices[0]["kgs_40"]}
                      <br />
                      Large : {mango.prices[0]["kgs_80"]}
                    </td>
                    <td>{mango.category}</td>
                    <td>
                      <Link to={`/admin/editmango/${mango._id}`}>
                        <AiFillEdit style={{ cursor: "pointer" }} />
                      </Link>
                      &nbsp;
                      <AiFillDelete
                        style={{ color: "red", cursor: "pointer" }}
                        onClick={() => {
                          dispatch(deleteMango(mango._id));
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Mangolist;