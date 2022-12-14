import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
import { setItem, getItem } from '@/utils/storage'

/**
 * 获取时间戳
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

/**
 * 设置时间戳
 */
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

/**
 * 是否超时
 */
export function isCheckTimeout() {
  var currentTime = Date.now()
  var timeStamp = getTimeStamp()
  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
