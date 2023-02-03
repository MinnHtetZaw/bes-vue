import {ref} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import {useRoute} from "vue-router";
const getDischarge = (id) => {

    const discharge = ref({})
    const error = ref({})
    const store = useStore()
    const route = useRoute()
    const get = (id) => {
        axios.get(store.getters.getUrl('discharge/'+id))
            .then(res => discharge.value = res.data.data)
            .catch(err => error.value = err)
    }
    get(id)
    return {discharge,error,get}
}
export default getDischarge(id);

