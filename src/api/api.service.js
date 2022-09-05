import axios from 'axios'
import AppConfig from '../config/app-config'

const ApiService = {
    init() {
        
        // use(VueAxios, axios)
        console.log('Base URL: ', AppConfig.apiUrl)
        axios.defaults.baseURL = AppConfig.apiUrl

        axios.interceptors.request.use(
            function (config) {
                return config
            },
            function (error) {
                window.scrollTo(0, 0)
                return Promise.reject(error)
            }
        )

        axios.interceptors.response.use(
            function (response) {
                return response.data
            },
            function (error) {
                const response = error.response.data
                return Promise.reject(response)
            }
        )
    },

    setHeaders() {
        // axios.defaults.headers.common.Authorization = `Bearer ${JwtService.getToken()}`
    },

    query(resource, params) {
        this.setHeaders()
        return axios.get(resource, params)
    },

    get(resource, slug = '') {
        this.setHeaders()
        return axios.get(`/${resource}/${slug}`)
    },

    getPublic(resource, slug = '') {
        return axios.get(`/${resource}/${slug}`)
    },

    post(resource, payload, params) {
        this.setHeaders()
        return axios.post(`/${resource}`, payload, params)
    },

    update(resource, slug, params) {
        this.setHeaders()
        return axios.put(`/${resource}/${slug}`, params)
    },

    put(resource, params) {
        this.setHeaders()
        return axios.put(`/${resource}`, params)
    },

    delete(resource, params) {
        this.setHeaders()
        return axios.delete(`/${resource}`, { data: params })
    }
}

export default ApiService

/* ----------------------------------------------------------------------
>>> Users Service
---------------------------------------------------------------------- */

export const PokemonService = {
    getPokemon: (name) => {
        return ApiService.get(`pokemon/${name}`)
    },
    getPokemons: (limit = 0, offset = 0) => {
        return ApiService.get(`pokemon?limit=${limit}&offset=${offset}`)
    },
}