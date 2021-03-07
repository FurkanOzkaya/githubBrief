import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify, {

})

const opts = {
    icons: {
        iconfont: 'mdiSvg' || "md" || "fa"
    },
}

export default new Vuetify(opts)