import "./App.css";
import { React, Component } from "react";
import Filter from "./Components/Filter/Filter.component";
import Header from "./Components/Header/Header.component";
import Products from "./Components/Products/Products.components";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const fetchData = async () => {
      const response = await axios.get(
        "https://assessment-edvora.herokuapp.com"
      );
      this.setState({ products: response.data });
    };
    fetchData();
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className=" col-sm-12 col-md-5 col-lg-3">
            <Filter products={this.state.products} />
          </div>
          <div className="col-sm-12 col-md-7 col-lg-9">
            <Header />
            <Products products={this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
