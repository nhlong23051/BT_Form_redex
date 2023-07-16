import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actLayThongTin } from '../action/actiontype';


class FormSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sv: {
                maSV: -1,
                hoTen: '',
                soDienThoai: 0,
                emailL: ''
            },
        }
    }
    handleValue = (e) => {
        let { name, value } = e.target
        this.setState({
            sv: { ...this.state.sv, [name]: value }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.layThongTin(this.state.sv)
    }
    render() {
        return (
            <div class="card">
                <div class="card-header bg-dark">
                    <h3 className='text-light'>Thông tin sinh viên</h3>
                </div>
                <div class="card-body">
                    <form className='row' onSubmit={(event) => this.handleSubmit(event)}>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                <span>Mã SV</span>
                                <input
                                    className='form-control'
                                    type='number'
                                    name='maSV'
                                    onChange={(event) => this.handleValue(event)}
                                ></input>
                            </div>
                            <div className='form-group'>
                                <span>Số điện thoại</span>
                                <input
                                    className='form-control'
                                    type='number'
                                    name='soDienThoai'
                                    onChange={(event) => this.handleValue(event)}
                                ></input>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='form-group'>
                                <span>Họ tên</span>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='hoTen'
                                    onChange={(event) => this.handleValue(event)}
                                ></input>
                            </div>
                            <div className='form-group'>
                                <span>Email</span>
                                <input
                                    className='form-control'
                                    type='text'
                                    name='email'
                                    onChange={(event) => this.handleValue(event)}
                                ></input>
                            </div>
                        </div>

                        <button className='btn btn-success ml-3'>Thêm sinh viên</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        layThongTin: (sv) => {
            dispatch(actLayThongTin(sv))
        }
    }
}

export default connect(null, mapDispatchToProps)(FormSV)