import loginModeReducer from './loginModeReducer';

describe('testing the loginModeReducer...', () => {
    test( 'test initial states is login', ()=> {
        //Testing intialization, don't really care about the action
        const action = { type: 'test' };
        //testing initialization, so state should be undefined
        const previousState = undefined
        //out should be our default state value
        let newState = loginModeReducer(previousState, action);
        expect (newState).toEqual('login')
        })

        test( 'test switching to register mode', ()=> {
            //Testing intialization, don't really care about the action
            const action = { type: 'SET_TO_REGISTER_MODE'};
            //testing initialization, so state should be undefined
            const previousState = 'login';
            //out should be our default state value
            let newState = loginModeReducer(previousState, action);
            expect (newState).toEqual('register')
            })

    })
