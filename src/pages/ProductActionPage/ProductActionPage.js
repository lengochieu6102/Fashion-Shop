import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actAddProductRequest} from '../../actions/index';
import {Link} from 'react-router-dom';

class ProductActionPage extends Component {
    constructor(props){
        super(props);
        this.state={
            id: '',
            txtName:'',
            txtPrice:0,
            txtImage:'',
            cbStatus:'',
        }
    }

    render() {
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
                                onBlur={this.onBlur}
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
                                onBlur={this.onBlur}
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
                                onBlur={this.onBlur}
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

    onBlur = (e)=>{
        var target = e.target;
        var name=target.name;
        var value=target.value;
        this.setState({
            [name]: value
        });
    }
    
    onChange =(e)=>{
        var target = e.target;
        var name=target.name;
        var value=target.checked;
        this.setState({
            [name]: value
        });
    }

    onSave = (e)=>{
        e.preventDefault();
        var {id,txtName,txtPrice,txtImage}=this.state;
        var product ={
            id: id,
            name: txtName,
            price: txtPrice,
            image: txtImage,
        }   
        this.props.onAddProduct(product);
        this.props.history.goBack();
    }
}

const mapDispatchToProps =(dispatch, props)=>{
    return {
        onAddProduct: (product)=>{
            dispatch(actAddProductRequest(product));
        }
    }
}

export default connect(null,mapDispatchToProps)(ProductActionPage);
