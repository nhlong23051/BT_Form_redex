import danhSachSV from "../component/danhSachSV"
import * as types from '../action/const/index'

const innitialState = {
    sv: [
        {
            maSV: 1,
            hoTen: 'Nguyen Van A',
            soDienThoai: 123456,
            email: 'a123@gmail.com'
        },
        {
            maSV: 2,
            hoTen: 'Nguyen Thi B',
            soDienThoai: 78910,
            email: 'b456@gmail.com'
        },
    ],
    search: ''
}


const listSV = (state = innitialState, action) => {
    switch (action.type) {
        case types.LAY_THONG_TIN:
            if (action.sv.maSV !== -1) {
                state.sv.push(action.sv)
            }
            return { ...state }

        case types.SEARCH:
            state.search = action.keyword
            return { ...state }

        default:
            return { ...state }
    }
}

export default listSV