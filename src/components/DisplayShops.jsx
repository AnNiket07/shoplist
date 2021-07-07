import React, { useState } from "react";
import { connect } from "react-redux";
// import { filterByArea } from "../redux/actions";
import { filterShops } from "../redux/reducer";
// import {useSelector} from 'react-redux'
// import { addShops } from "../redux/reducer";
// import {filterRecommendations} from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    shops: state.shops,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterShop: (Area) => dispatch(filterShops(Area)),
  };
};

const DisplayShops = (props) => {
  const [area, setArea] = useState("");
  // const filteredShops = filterByArea(area);
  const areaChange = (e) => {
    setArea(e.target.value);
  };
  return (
    <div className="displayshops">
      <div className="buttons">
        <label>
          filter Area:
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
        <button onClick={()=>props.filterShop({Area:area})} >filter</button>
      </div>
      <ul>{props.shops.map((item) => {
            return (  
              <li key={item.id}>{item.item}{item.area}</li>
            );
          })}</ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayShops);

// function onpress() {
//   const { shop, area } = this.state;

//   this.props.filterRecommendations({shop, area});
// }
