const state = {
  bucketId: '123'    // 默认值
}

const getters = {
  bucketId: state=> state.bucketId
}

const mutations = {
  updateBucketId(state, bucketId) {
    state.bucketId = bucketId
  }
}

export default {
  state,
  mutations
}