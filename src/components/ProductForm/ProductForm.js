import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductForm(props) {
    const [editProduct, setEditProduct] = useState({
        id: '',
        txtName: '',
        txtPrice: 0,
        txtImage: '',
        cbStatus: '',
    })
    useEffect(() => {
        if (props.initialValue.id && !props.isAddMode) {
            setEditProduct({
                id: props.initialValue.id,
                txtName: props.initialValue.name,
                txtPrice: props.initialValue.price,
                txtImage: props.initialValue.image,
                cbStatus: props.initialValue.status,
            });
        }
    }, [props])

    const onChange = (e) => {

        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        setEditProduct({
            ...editProduct,
            [name]: value
        });
        // console.log(editProduct);
    }
    const onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, txtImage, cbStatus } = editProduct;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            image: txtImage,
            status: cbStatus,
        };
        props.handleSubmit(product);
    }


    var { txtName, txtPrice, txtImage, cbStatus } = editProduct;
    return (
        <div>
            <form onSubmit={onSave}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Tên sản phẩm:</label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            name="txtName"
                            onChange={onChange}
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
                            onChange={onChange}
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
                            onChange={onChange}
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
                                onChange={onChange}
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

export default ProductForm;