import React, { useReducer } from 'react';
// import { useImmerReducer } from 'use-immer';
import { login } from '../../reducer/api';
import Notes from '../Notes/Notes';
import {curriedLoginReducer,initialState }  from '../../reducer/loginReducer'


export default function Login() {
  
  const [state, dispatch] = useReducer(curriedLoginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = state;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'login' });

    try {
      await login({ username, password });
      dispatch({ type: 'success' });
    } catch (error) {
      dispatch({ type: 'error' });
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row justify-content-md-center'>
        {isLoggedIn ? (
          <>
            <div className='row max m-2'>
              <div className='col-md-6'> <h1>Welcome {username}!</h1></div>
              <div  className='col-md-6 mt-10' >
              <h1><button  className='btn btn-danger float-right' onClick={() => dispatch({ type: 'logOut' })}>
               Log Out
                </button></h1>
              </div>
              <Notes/>
            </div>
           
          </>
        ) : (
          <form className='col-md-6 mt-5' onSubmit={onSubmit}>
            <div className="form-group text-center ">
              {error && <p className='error'>{error}</p>}
              <p>Please Login!</p>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type='text'
                placeholder='username'
                value={username}
                required
                onChange={(e) =>
                  dispatch({
                    type: 'field',
                    fieldName: 'username',
                    payload: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <input
              className="form-control"
                type='password'
                placeholder='password'
                autoComplete='new-password'
                value={password}
                required
                onChange={(e) =>
                  dispatch({
                    type: 'field',
                    fieldName: 'password',
                    payload: e.currentTarget.value,
                  })
                }
              />
            </div>
            <div className=' text-center'>
            <button className='btn btn-primary' type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
