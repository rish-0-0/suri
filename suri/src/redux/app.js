import API from '../api';

export const upload = (file, category) => {
    return dispatch => {
        dispatch({
            type: 'UPLOADING'
        });
        API.post(`/api/upload?category=${category}`, file)
        .then((res) => {
            console.log('resp', res);
            if (res.data.success) {
                dispatch({
                    type: "UPLOAD_SUCCESS"
                });
            }
            else {
                dispatch({
                    type: "UPLOAD_FAILED"
                });
            }
            
        })
        .catch(err => {
            console.log('err', err);
            dispatch({
                type: "UPLOAD_FAILED"
            });
        });
    }
};

const initState = {
    loading: false,
    uploading: false,
};
export default function (state=initState, action) {
    switch(action.type) {
        case 'UPLOADING':
            return {
                uploading: true,
            };
        case 'UPLOAD_SUCCESS':
            return {
                uploading: false,
                uploadSuccess: true,
            }
        case 'UPLOAD_FAILED':
            return {
                uploading: false,
                uploadSuccess: false,
            };
        default:
            return initState;
    }
}