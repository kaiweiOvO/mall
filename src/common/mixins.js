import {debounce} from './utils'
import BackTop from 'components/common/backTop/BackTop'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        let _refresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgListener = () => {
            _refresh()
        }
        this.$bus.$on('itemImgLoad', this.itemImgListener)
    }
}
