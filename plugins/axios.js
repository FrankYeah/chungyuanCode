export default function( { $axios, redirect} ){
    // Authorization
    $axios.setHeader('Content-Type', 'application/json')
    
    $axios.onRequest((config) => {
        // config.withCredentials = true
        return config
    })
} 