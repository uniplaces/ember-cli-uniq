import Type from './types';

export default Type.create({
    HELP: {
        label: 'Help',
        route: '/help' 
    },
    LOGIN: {
        label: 'Login',
        route: '/login'
    },
    SIGNUP: {
        label: 'Sign up',
        route: '/sign-up',
        bordered: true
    }
});
