import React, { Component } from "react";
import UpdateCustomer from "./UpdateCustomer";
import { Link } from "react-router-dom";

export class Customers extends Component {
    state = {
        selectedCus: {},
    };
    render() {
        console.log(this.state.selectedCus);
        console.log(this.props);
        const { customers, initLoad, addLoad } = this.props;
        console.log(customers)
        console.log(initLoad)
        console.log(addLoad)
        let listData = [];
        if (this.props.customers) {
            listData = this.props.customers.map((customer, key) => {
                return (
                    <tr key={key}>
                        <td>{customer.id}</td>
                        <td>{customer.name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.phone}</td>
                        <td><Link to={`/update/${customer.id}`}><button onClick={() => handleEditClick(customer)}>Edit</button></Link></td>
                    </tr>
                )
            })
        }
        function handleSubmit(event) {
            event.preventDefault();
            const customer = {
                name: event.target.name.value,
                address: event.target.address.value,
                phone: event.target.phone.value
            }
            console.log(id, customer)
            event.target.name.value = ""
            event.target.address.value = ""
            event.target.phone.value = ""
            addLoad(customer);

            event.target.name.focus();
        }

        const handlePickData = (data) => {
            this.setState({ selectedCus: data });
            console.log(data, "data");
            console.log(this.state, "state")
            // const customer1 = {
            //     name1: e.target.name.value,
            //     address1: e.target.address.value,
            //     phone1: e.target.phone.value
            // }
        }
        const handleEditClick = (customer) => {
            handlePickData(customer);
        }
        return (
            <>
                <div>
                    <h1>Bảng dữ liệu</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Họ và tên: </label>
                            <input name="name" type="text" placeholder="Họ tên"></input>
                        </div>
                        <div>
                            <label>Địa chỉ: </label>
                            <input name="address" type="text" placeholder="Địa chỉ"></input>
                        </div>
                        <div>
                            <label>Số điện thoại: </label>
                            <input name="phone" type="text" placeholder="Số điện thoại"></input>
                        </div>
                        <button type="submit">Thêm</button>
                    </form>
                    <h1>Bảng update</h1>
                    <UpdateCustomer customer={{ name: 2 }} />

                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Họ và tên</th>
                                    <th>Địa chỉ</th>
                                    <th>Số điện thoại</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}