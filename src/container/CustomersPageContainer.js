import { Component } from "react";
import * as actions from "../actions/CustomerPageActions"
import { connect } from "react-redux";
import {Customers} from "../component/Customers"

class CustomerContainer extends Component {
    componentDidMount(){
        this.props.initLoad();
    }
    render(){
        return <Customers {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        customers: state.customers.listCustomers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoad: () => {
            return dispatch(actions.getCustomers())
        },
        addLoad: (data) => {
            return dispatch(actions.addCustomer(data))
        }
    }
}

export default connect( mapStateToProps,mapDispatchToProps)(CustomerContainer)