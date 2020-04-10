import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCounter(state, oldProduct) {
            oldProduct.count ++
        },
        addToCart(state, payload) {
            state.cartList.push(payload)
        }
    },
    actions: {
        addToCart(context, payload) {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if(oldProduct) {
                context.commit('addCounter', oldProduct)
            }
            else {
                payload.count = 1
                context.commit('addToCart', payload)
            }
        }
    },
    modules: {

    },
    getters
})
