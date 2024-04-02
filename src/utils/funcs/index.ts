/**
 * @function getRandomColor 生成一个16进制的随机颜色
 * @returns randomColor：一个随机16进制的颜色字符串值
 * 函数开发思路：
 * 1. 获取一个足够大的随机数，16777215/`Math.random()`
 * 2. 将该随机数进行向下取整/`Math.floor()`
 * 3. 将整数转为16进制形显示/`toString(16)`
 * 4. 确保我们的16进制数据是6位数，有时候可能会是6位以下，例如5位，如果不足的话需要我们
 * 使用`padStart(6,'0')`在字符串开头进行填充，6代表最少6位，0代表填充的数据
 * 5. 以#xxxxxx的形式返回该颜色
 */
export const getRandomColor = (): string => {
  /**
  * 1. 获取一个随机数，这里使用16777215，是因为它是一个十六进制颜色的最大值，
  * 它对应的是 #FFFFFF，即红、绿、蓝三个分量都取最大值，即255。
  * 在十六进制表示中，每个颜色分量的范围是0到255，所以一共有256个可能的值。
  * 因为每个颜色分量有256个可能的取值，所以在计算随机颜色时，
  * 我们将三个颜色分量的取值范围相乘，得到256 * 256 * 256 = 16777216，
  * 然后由于我们从0开始计数，所以实际上可以取到的颜色值范围是0到16777215。
  * Math.random(): 这是 JavaScript 中的一个内置函数，
  * 用于生成一个0到1之间（包括0但不包括1）的随机数。
  * 2. Math.floor()是 JavaScript 中的一个内置函数，用于向下取整，
  * 即将一个数字向下舍入为最接近的整数。
  * 在这段代码中，Math.floor()被用来确保生成的随机数是一个整数，因为颜色值必须是整数。
  * 3. toString(16): 这是 JavaScript 中的一个方法，
  * 它将数字转换为十六进制字符串表示形式。参数16表示转换为十六进制。
  * 4. padStart(6, '0'): 这是 JavaScript 中的另一个方法，
  * 它用于在字符串的开头填充指定的字符，使字符串达到指定的长度。
  * 在这里，我们使用它来确保生成的十六进制颜色代码始终是6个字符长，不足的部分用0填充。
 */
  // 1. 详细步骤版本
  // let randomColor: number | string = Math.random() * 16777215 as number
  // randomColor = Math.floor(randomColor)
  // randomColor = randomColor.toString(16) as string
  // randomColor = randomColor.padStart(6, '0')
  // return `#${randomColor}`
  // 2. 优化版本
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
}

/**
 * @function getScopeRandomNumber 给定一个指定范围的随机数
 */
export const getScopeRandomNumber = (min: number, max: number, isFloor?: boolean): number => {
  return isFloor ? Math.floor(Math.random() * (max - min + 1) + min) : Math.random() * (max - min + 1) + min
}