import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const ClRequest = (method, url, data) => {
    return axios({
        method: method,
        headers: { 'Content-Type': 'application/json' },
        url: url,
        data: data,
    });
};
