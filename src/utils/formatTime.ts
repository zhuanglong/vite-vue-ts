import dayjs from 'dayjs';

/**
 * 格式化时间
 * @return 无效则返回 'Invalid Date'
 */
export function formatTime(date: dayjs.ConfigType, format = 'YYYY-MM-DD'): string {
  return dayjs(date).format(format);
}

/**
 * 获取年份
 * @return 无效则返回 NaN
 */
export function getYearNum(date: dayjs.ConfigType = undefined) {
  return dayjs(date).year();
}

/**
 * 获取月份
 * @return 无效则返回 NaN
 */
export function getMonthNum(date: dayjs.ConfigType = undefined) {
  return dayjs(date).month() + 1; // 月份是从 0 开始计算的，即 1 月是 0
}

/**
 * 获取当前时间戳
 * @return 无效则返回 NaN
 */
export function getTimeStamp(date: dayjs.ConfigType = undefined) {
  return dayjs(date).valueOf();
}

/**
 * 获取星期几
 */
export function getDateInWeek(date: dayjs.ConfigType = undefined, full = true) {
  return `${full ? '周' : ''}${['日', '一', '二', '三', '四', '五', '六'][dayjs(date).day()]}`;
}
