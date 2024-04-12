
import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';
const { Random } = Mock;

export const lazyLoadingAPI = [{
  url: '/lazyLoading/List',
  method: 'get',
  response: () => {
    let lazyLoadingArr = []
    for (let i = 0; i < Random.natural(30, 100); i++) {
      const width = Random.natural(300, 1980)
      const height = Random.natural(300, 1980)
      lazyLoadingArr.push({
        width,
        height,
        url: Random.image(`${width}x${height}`, Random.color())
      })
    }
    return {
      code: 200,
      lazyLoadingArr
    }
  }
}] as MockMethod[]