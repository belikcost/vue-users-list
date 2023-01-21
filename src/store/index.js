import Vuex from "@/plugins/vuex";
import users from './users.json';

const store = new Vuex.Store({
    state: {
        users: [],
        filters: {}
    },
    getters: {
        users: state => state.users,
        filters: state => state.filters
    },
    mutations: {
        setFilters(state, filters) {
            const nextFilters = {};
            Object.entries(filters).forEach(([filter, value]) => {
                if (value) nextFilters[filter] = value;
            });
            state.filters = nextFilters;
        },
        setUsers(state, users) {
            state.users = users;
        }
    },
    actions: {
        changeFilters({ commit, dispatch }, filters) {
            commit('setFilters', filters);
            dispatch('fetchUsers');
        },
        fetchUsers({ state, commit }) {
            commit('setUsers', users.results.filter(
                (user) => Object.entries(state.filters).every(([filter, value]) => {
                    if (filter === 'country') {
                        return user[filter].toLowerCase() === value.toLowerCase();
                    } else if (filter === 'score') {
                        const number = +(value.split('').filter((char) => !isNaN(+char)).join(''));
                        if (value[0] === '>') return user[filter] > number;
                        return user[filter] < number;
                    }
                })
            ));
        }

    }
});

export default store;