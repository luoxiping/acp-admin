import ApiComm from '../ApiComm'
import Qs from 'qs'
import encrypt from 'js-base64'
import { doDownLoadFile } from '@/libs/tools'

export default {
  getLoginInfo: () => {
    return ApiComm.$http.get('/log/login-info')
  },
  searchFile: (startDate, endDate) => {
    return ApiComm.$http.post('/log/files', {
      startDate: startDate,
      endDate: endDate
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function (data) {
        data = Qs.stringify(data)
        return data
      }]
    })
  },
  downLoadFile: (fileName) => {
    doDownLoadFile(ApiComm.$store.state.app.appInfo.baseURL + '/log/files', 'get', { fileName: encrypt.Base64.encode(fileName) })
  },
  queryRouteLog: (query) => {
    return ApiComm.$http.post('/log/gateway-route-log', query)
  },
  queryOperateLog: (query) => {
    return ApiComm.$http.post('/log/operate-log', query)
  },
  queryLoginLog: (query) => {
    return ApiComm.$http.post('/log/login-log', query)
  }
}
