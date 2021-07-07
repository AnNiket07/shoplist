import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
// import { filterByArea } from "../redux/actions";
import { filterShops, categoryShops } from "../redux/reducer";
import ShopItem from "./ShopItem";
// import {useSelector} from 'react-redux'
// import { addShops } from "../redux/reducer";
// import {filterRecommendations} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    shops: state.shops,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     filterShop: (Area) => dispatch(filterShops(Area)),
//     categoryShop: (Category) => dispatch(categoryShops(Category)),
//     openShop: (openstatus) => dispatch(categoryShops(openstatus)),
//   };
// };

const DisplayShops = (props) => {
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [openstatus, setOpenstatus] = useState("");
  const [filteredArr, setFilteredArr] = useState([...props.shops]);

  useEffect(() => {
    setFilteredArr(props.shops);
  }, [props.shops]);

  const areaChange = (e) => {
    setArea(e.target.value);
  };
  const categoryChange = (e) => {
    setCategory(e.target.value);
  };
  const statusChange = (e) => {
    setOpenstatus(e.target.value);
  };

  const handleClick = ({ category, area, openstatus }) => {
    let arr;
    if (category) {
      arr = props.shops.filter((shop) => shop.category === category);
    } else if (area) {
      arr = props.shops.filter((shop) => shop.area === area);
    }
    else{
      arr = props.shops.filter((shop) => shop.openstatus ===  openstatus);
    }
    setFilteredArr(arr);
  };

  return (
    <div className="displayshops">
      <div className="filterstyle">
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
        <button onClick={() => handleClick({ area })}>filter by area</button>
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
        <button onClick={() => handleClick({ category })}>
          filter by category
        </button>
        <label>
          Open/Close Status:
          <select onChange={(e) => statusChange(e)}>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </select>
        </label>
        <button onClick={() => handleClick({ openstatus })}>
          filter by Status
        </button>
      </div>
      <h3 style={{ alignSelf: "center", margin: 40 }}>SHOPLIST</h3>
      <Container className="shoplist">
        {filteredArr.map((item) => {
          return (
            <ShopItem
              key={item.id}
              item={item}
              area={item.area}
              category={item.category}
              openstatus={item.openstatus}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(DisplayShops);
