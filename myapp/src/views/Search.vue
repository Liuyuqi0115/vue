<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <van-list class="cinemaUl">
      <van-cell
        class="listli"
        v-for="data in computedSearch"
        :key="data.cinemaId"
      >
        <div>{{ data.name }}</div>
        <div
          style="
            font-size: 12px;
            color: gray;
            margin-top: 2px;
            margin-bottom: 2px;
          "
        >
          {{ data.address }}
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search, List, Cell } from 'vant'
import { mapActions, mapState } from 'vuex'

Vue.use(Search).use(List).use(Cell)
export default {
  mounted() {
    if (this.cinameList.length === 0) {
      this.getCinameList(this.localCity.cityId)
      // this.$store.dispatch('getCinameList')
    }
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState('CinameModule', ['cinameList']),
    ...mapState('CityModule', ['localCity']),
    computedSearch() {
      if (this.value.length === 0) return []
      return this.cinameList.filter(
        (p) =>
          p.name.toUpperCase().includes(this.value.toUpperCase()) ||
          p.address.toUpperCase().includes(this.value.toUpperCase())
      )
    }
  },
  methods: {
    ...mapActions('CinameModule', ['getCinameList']),
    onSearch() {},
    onCancel() {
      this.$router.replace('/cinema')
    }
  }
}
</script>
