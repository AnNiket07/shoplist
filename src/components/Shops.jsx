import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { addShops } from "../redux/reducer";
// import "../App.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    minWidth: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  modalcontainer: {
    display: "flex",
    flexDirection: "column",
  },
};

const mapStateToProps = (state) => {
  return {
    shops: state.shopreducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShop: (obj) => dispatch(addShops(obj)),
  };
};

const Shops = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [shop, setShop] = useState("");
  const [area, setArea] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setShop(e.target.value);
  };
  const areaChange = (e) => {
    setArea(e.target.value);
  };
  // console.log(props);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <div>
        <h2>Add Shop</h2>
        <button onClick={closeModal}>close</button>
          <label>
            Name:
            <input type="text" onChange={(e) => handleChange(e)} name="name" />
          </label>
          {/* <label>
              Category:
              <select>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option selected value="Baker">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationery Shop ">Stationery Shop </option>
              </select>
            </label>*/}
            <label>
              Area:
              <select onChange={(e) => areaChange(e)}>
                <option value="Thane">Thane</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai Suburban">Mumbai Suburban</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Solapur">Solapur</option>
              </select>
            </label> 
          <button
            type=""
            onClick={() =>
              props.addShop({
                //object
                id: Math.floor(Math.random() * 1000),
                item: shop,
                area: area,
              })
            }
          >
            Add Shop
          </button>
      </div>
      </Modal>
      {/* <div>
        <ul>
          {props.shops.map((item) => {
            return (<div></div>);
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
