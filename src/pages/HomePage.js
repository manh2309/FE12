import React from "react";
import {Customers} from "../component/Customers"
import CustomersPageContainer from "../container/CustomersPageContainer";

class HomePage extends React.Component{
    render(){
        return(
            <div className="HomePage">
                <h1>Trang chủ</h1>
                <CustomersPageContainer/>
            </div>
        )
    }
}

export default HomePage;