import createPersistedState from 'vuex-persistedstate';

export default ({ store }) => {
    createPersistedState({
        paths: ['posts', 'post']
    })(store);
};
