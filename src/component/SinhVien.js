import React, { Component } from 'react'

export default class SinhVien extends Component {

    render() {
        let { sv } = this.props
        return (
            <>
                <tr>
                    <td>{sv.maSV}</td>
                    <td>{sv.hoTen}</td>
                    <td>{sv.soDienThoai}</td>
                    <td>{sv.email}</td>
                </tr>
            </>
        )
    }
}
