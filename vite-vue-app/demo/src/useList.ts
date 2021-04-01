import { ref } from 'vue'
import axios, { AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'

type IQuery = {
  year: number;
  pageSize?: number;
  pageNum?: number;
}

const listApi = () =>
  axios({
    method: 'get',
    url: `/ops-crm/wapi/bonus/package/list/2020`,
    params: {
      pageSize: 10,
      pageNum: 1
    }
  })
    .then((res) => res.data)
    .catch()

const useListByYear = () => {
  const result = ref(null)
  const loading = ref(false)
  const error = ref('')

  const fetch = async () => {
    loading.value = true
    try {
      const res = await listApi()
      loading.value = false
      if (res.success) {
        result.value = res.data
      } else {
        error.value = res.data?.reason || '获取数据失败'
        message.warning(error.value)
      }
    } catch (e) {
      loading.value = false
      error.value = '报错啦'
      message.warning(error.value)
    }
  }

  return {
    result,
    loading,
    error,
    fetch
  }
}

export default useListByYear
