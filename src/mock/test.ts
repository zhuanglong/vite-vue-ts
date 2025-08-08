import { faker } from '@faker-js/faker'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import { resultSuccess } from './util'

export default defineFakeRoute([
  {
    url: '/dev-api/test/random',
    method: 'post',
    timeout: 1000,
    response: () => {
      return resultSuccess(faker.color.rgb())
    },
  },
  {
    url: '/dev-api/test/messageList',
    method: 'post',
    timeout: 1000,
    response: () => {
      const count = faker.number.int({ min: 5, max: 10 })
      const data = Array.from({ length: count }, () => ({
        id: faker.string.uuid(),
        title: faker.lorem.sentence(),
        content: faker.lorem.paragraph(),
        image: faker.image.url({ width: 200, height: 100 }),
        date: faker.date.anytime(),
      }))

      return resultSuccess({ code: 0, data })
    },
  },
  {
    url: '/dev-api/test/demo',
    method: 'post',
    timeout: 1000,
    response: () => {
      const count = faker.number.int({ min: 5, max: 10 })
      const cities = {
        110000: '北京市',
        120000: '天津市',
        130000: '河北省',
        140000: '山西省',
      }
      const grades = ['1年级', '2年级', '3年级']

      const data = Array.from({ length: count }, (_, index) => {
        // 随机选择2-4个城市
        const cityKeys = Object.keys(cities)
        const cityCount = faker.number.int({ min: 2, max: 4 })
        const selectedCities = faker.helpers.arrayElements(cityKeys, cityCount)
        const city = selectedCities.reduce((acc, key) => {
          acc[key] = cities[key as '110000' | '120000' | '130000' | '140000']
          return acc
        }, {} as Record<string, string>)

        return {
          sid: index + 1,
          userId: faker.string.alphanumeric(5),
          sex: faker.person.sexType(),
          city,
          grade: faker.helpers.arrayElement(grades),
          guid: faker.string.uuid(),
          id: faker.string.uuid(),
          title: faker.lorem.sentence(),
          paragraph: faker.lorem.paragraph(),
          image: faker.image.url({ width: 200, height: 100 }),
          address: faker.location.county(),
          date: faker.date.past().toISOString().split('T')[0],
          time: faker.date.anytime().toTimeString().split(' ')[0],
          url: faker.internet.url(),
          email: faker.internet.email(),
          ip: faker.internet.ipv4(),
          regexp: faker.helpers.fromRegExp(/[a-z][A-Z]\d/),
        }
      })

      return resultSuccess({ code: 0, data })
    },
  },
])
