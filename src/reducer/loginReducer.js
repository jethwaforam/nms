import produce from 'immer';

function loginReducer(draft, action) {
    switch (action.type) {
      case 'field': {
        draft[action.fieldName] = action.payload;
        return;
      }
      case 'login': {
        draft.error = '';
        draft.isLoading = true;
        return;
      }
      case 'success': {
        draft.isLoggedIn = true;
        draft.isLoading = false;
       // draft.username = '';
        draft.password = '';
        return;
      }
      case 'error': {
        draft.error = 'Incorrect username or password!';
        draft.isLoggedIn = false;
        draft.isLoading = false;
        draft.username = '';
        draft.password = '';
        return;
      }
      case 'logOut': {
        draft.isLoggedIn = false;
        draft.username = '';
        draft.password = '';
        return;
      }
      default:
        return;
    }
  }
  
  export const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    isLoggedIn: false,
  };
  
  export const curriedLoginReducer = produce(loginReducer);