import React, { Component } from 'react'
import { connect } from 'react-redux'
import SinhVien from './SinhVien'

class DanhSachSV extends Component {
    render() {
        let { sv, search } = this.props.listSV

        sv = sv.filter((a) => a.hoTen.toLowerCase().indexOf(search.toLowerCase()) !== -1);

        let sinhVien = sv?.map((p, index) => {
            return <SinhVien sv={p} key={index} />
        })
        return (
            <table class="table ">
                <thead className='bg-dark text-light'>
                    <tr>
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {sinhVien}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listSV: state.listSV
    }
}

export default connect(mapStateToProps, null)(DanhSachSV)