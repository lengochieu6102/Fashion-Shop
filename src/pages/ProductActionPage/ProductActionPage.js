import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';
import { Link } from 'react-router-dom';


class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: 0,
            txtImage: '',
            cbStatus: '',
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing}=nextProps;
            this.setState({
                id:itemEditing.id,
                txtName:itemEditing.name,
                txtPrice: itemEditing.price,
                txtImage: itemEditing.image,
                cbStatus: itemEditing.status,
            })
        }
    }

    render() {
        var { txtName, txtPrice, txtImage, cbStatus } = this.state;
        return (
            <div className="product-form">
                <h3>Thêm sản phẩm</h3>
                <form onSubmit={this.onSave}>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Tên sản phẩm:</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="txtName"
                                onChange={this.onChange}
                                value={txtName}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Giá: </label>
                        <div className="col-sm-10">
                            <input
                                type="number"
                                className="form-control"
                                name="txtPrice"
                                onChange={this.onChange}
                                value={txtPrice}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Hình ảnh: </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="txtImage"
                                onChange={this.onChange}
                                value={txtImage}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2">Trạng thái</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="cbStatus"
                                    onChange={this.onChange}
                                    checked={cbStatus}
                                />
                                <label className="form-check-label" >
                                    Còn hàng
                                </label>
                            </div>
                        </div>
                    </div>
                    <Link to="/product-manager" className="btn btn-warning">Quay lại</Link>
                    <button type="submit" className="btn btn-primary ml-2">Xác nhận</button>
                </form>
            </div>
        );
    }

    onChange = (e) => {

        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
        console.log(value)
    }

    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, txtImage, cbStatus } = this.state;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            image: txtImage,
            status: cbStatus,
        };

        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        this.props.history.goBack();
    }
}

const mapStateToProps = (state) => {
    return {
        itemEditing: state.itemEditing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
