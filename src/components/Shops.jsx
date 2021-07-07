import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { addShops } from "../redux/reducer";
import "../App.css";

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
  const [category, setCategory] = useState("");
  const [opendate, setOpendate] = useState("");
  const [closedate, setClosedate] = useState("");
  var d = new Date();
  var open = new Date(opendate);
  var close = new Date(closedate);

  function chechopen() {
    if (open <= d && d <= close) {
      return "open";
    } else {
      return "close";
    }
  }

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
  const categoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleOpenDate = (e) => {
    setOpendate(e.target.value);
  };
  const handleCloseDate = (e) => {
    setClosedate(e.target.value);
  };

  console.log(opendate, closedate);

  return (
    <div class="modalStyle">
      <button onClick={openModal}>Add Shop</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="modalheader">
            <h2>Add Shop</h2>
            <button onClick={closeModal}>close</button>
          </div>

          <div className="modalForm">
          <label>
            Name:
            <input type="text" onChange={(e) => handleChange(e)} name="name" />
          </label>
          <label>
            Category:
            <select onChange={(e) => categoryChange(e)}>
              <option value="Grocery">Grocery</option>
              <option value="Butcher">Butcher</option>
              <option selected value="Baker">
                Baker
              </option>
              <option value="Chemist">Chemist</option>
              <option value="Stationery Shop ">Stationery Shop </option>
            </select>
          </label>
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
          <label>
            Open Date:
            <input
              type="date"
              onChange={(e) => handleOpenDate(e)}
              name="opendate"
            />
          </label>
          <label>
            Close Date:
            <input
              type="date"
              onChange={(e) => handleCloseDate(e)}
              name="opendate"
            />
          </label>

          <button
            type=""
            onClick={() =>
              props.addShop({
                //object
                id: Math.floor(Math.random() * 1000),
                item: shop,
                area: area,
                category: category,
                openstatus: chechopen(),
              })
            }
          >
            Add Shop
          </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Shops);
