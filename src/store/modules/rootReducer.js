import { combinerReducers } from 'redux';

import cart from './cart/reducer';

export default combinerReducers({
    cart,
});
