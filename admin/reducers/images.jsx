const DEFAULT_STATE = {
    data: null,
    upload: null
};

export default function reducer(state=DEFAULT_STATE, action){
    switch(action.type) {
        case "FETCH_IMAGES_PENDING":
            return {
                ...state,
                data: null,
            };
        case "FETCH_IMAGES_REJECTED":
            return {
                ...state,
                data:false,
            };
        case "FETCH_IMAGES_FULFILLED":
            return {
                ...state,
                data: action.payload,
            };

        case "UPLOAD_IMAGE_PENDING":
            return {
                ...state,
                upload: null,
            };
        case "UPLOAD_IMAGE_REJECTED":
            return {
                ...state,
                upload:false,
            };
        case "UPLOAD_IMAGE_FULFILLED":
            return {
                ...state,
                upload: action.payload,
            };

        default:
            return {...state};
    }
}
