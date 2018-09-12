import axios from 'axios';
import keys from '../configs/keys';

const create = (api) => {
    return {
        get:axios.get(keys.backend+api),
        post:axios.post(keys.backend+api),
        put:axios.put(keys.backend+api),
        patch:axios.patch(keys.backend+api),
    }
}

export default {
    create
}