import React, { Component } from 'react';

class ProductActionPage extends Component {
    render() {
        return (
            <div className="product-form">
                <h3>Thêm sản phẩm</h3>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Tên sản phẩm:</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="txtName" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Giá: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="txtValue" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Hình ảnh: </label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="txtImage" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-2">Trạng thái</div>
                        <div className="col-sm-10">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="checkState" />
                                <label className="form-check-label" >
                                    Còn hàng
                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Xác nhận</button>
                </form>
            </div>
        );
    }
}

export default ProductActionPage;
