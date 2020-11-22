// import axios from '@/plugins/axios.js'
import axios from 'axios'


export const state = () => ({
    menuIsActive: false,
    post: {},
    posts: []
});
export const getters = {
};
export const actions = {
    async getPosts({ commit }) {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        console.log(`index.js - 14 - we here`, data);
        commit('setPosts', data)
    },
    async getPost({ commit, store }, id) {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        commit('setCurrentPost', data)
    },
    // async nuxtServerInit({ commit }, { store, isClient, isServer, route, params }) {
    //     if (isServer && route.name === 'postsView') {
    //         let { data } = await axios.get('posts')
    //         commit('setPosts', data)
    //     }
    //     if (isServer && params.id) {
    //         let { data } = await axios.get(`posts/${params.id}`)
    //         commit('setCurrentPost', data)
    //     }
    // }
};
export const mutations = {
    // toggleMenuState(state) {
    //     state.menuIsActive = !state.menuIsActive
    // },
    setPosts: (state, posts) => {
        state.posts = posts
    },
    setCurrentPost: (state, post) => {
        state.post = post
    }
};
