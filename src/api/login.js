import request from '@/utils/request'

export function getInfo(id) {
  return request({
    url: `app/user/traceability/info/${id}`,
    method: 'post'
  })
}

