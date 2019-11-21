import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer zLQz_UC0x0j_c_L26-XDZQYYACECK98-EVHwbLJtL-XsURaYRfkV5PtR58s5nPGKfi3o11bPcK3eT5jK1KrXerZvNpRwsxdNYiaNSxv54cIugrxeeu8Dlonl6-zUXXYx'
    }
});
