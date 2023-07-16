import * as types from './const/index'

export const actLayThongTin = (sv) => {
    return {
        type: types.LAY_THONG_TIN,
        sv
    }
}

export const actSearch = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
}