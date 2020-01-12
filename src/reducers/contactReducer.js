import { GET_CONTACTS } from '../actions/types';

const initialState = {
    contacts: [
        {
          id: 1,
          name: 'John Doess',
          email: 'tienv@gmail.com',
          phone: '555-233-4444'
        },
        {
          id: 2,
          name: 'Joshn Doe',
          email: 'gienv@gmail.com',
          phone: '355-233-4444'
        },
        {
          id: 3,
          name: 'hn Doe',
          email: 'tssssnv@gmail.com',
          phone: '555-633-4444'
        }
      ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_CONTACTS:
            return {
                ...state
            }
        default:
            return state;
    }
}