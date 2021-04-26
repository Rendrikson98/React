import reducer from './auth';
import * as actionsType from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });

    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, {
            type: actionsType.AUTH_SUCCESS,
            token: 'some-token-id',
            userId: 'some-user-id'
        })).toEqual({
            token: 'some-token-id',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
})