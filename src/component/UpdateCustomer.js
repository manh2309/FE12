import { Component } from "react";

class UpdateCustomer extends Component {
    render() {
        const { customer } = this.props;
        console.log("props", this.props);
        return (
            <form>
                <div>
                    <label>Họ và tên: </label>
                    <input name="name" type="text" value={customer?.name || ""} placeholder="Họ tên"></input>
                </div>
                <div>
                    <label>Địa chỉ: </label>
                    <input name="address" type="text" value={customer?.address || ""} placeholder="Địa chỉ"></input>
                </div>
                <div>
                    <label>Số điện thoại: </label>
                    <input name="phone" type="text" value={customer?.phone || ""} placeholder="Số điện thoại"></input>
                </div>
                <button type="submit">Update</button>
            </form>
        )
    }
}
export default UpdateCustomer