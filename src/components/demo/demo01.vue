<template>
    <baidu-map :center="center" :zoom="zoom" class="bm-view" ak="qeaWNDHywm4w1XqSRSpTaaDWhqC31V7B" @ready="handler">
        <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true" 
        @locationSuccess='success(point, AddressComponent, marker)' @locationError='error(StatusCode)'></bm-geolocation>
    </baidu-map>
</template>

<script>
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmGeolocation from 'vue-baidu-map/components/controls/Geolocation.vue'
export default {
    data () {
        return {
            center: {lng: 0, lat: 0},
            zoom: 3
        }
    },
    components: {
        BaiduMap,
        BmGeolocation
    },
    methods: {
        handler ({BMap, map}) {
            console.log(BMap, map)
            this.center.lng = 116.404
            this.center.lat = 39.915
            this.zoom = 15
        },
        // 定位成功触发
        success(point, AddressComponent, marker){
            console.log(point, AddressComponent, marker);
        },
        // 定位失败触发
        error(StatusCode){
            console.log(StatusCode);
        }
    }
}
</script>

<style>
    .bm-view {
        width: 100%;
        height: 300px;
    }
</style>