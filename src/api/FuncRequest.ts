import AxiosHttp from './ClassOneRequest'

// GET
export const requestGet = (url: string, params?: any) => {
  return AxiosHttp.axiosInstance.get(url, params)
}

// POST
export const requestPost = (url: string, params?: any) => {
  return AxiosHttp.axiosInstance.post(url,params)
}

// PUT
export const requestPut = (url: string, params?: any) => {
  return AxiosHttp.axiosInstance.put(url,params)
}

// DELETE
export const requestDelete = (url: string, params?: any) => {
  return AxiosHttp.axiosInstance.delete(url,params)
}