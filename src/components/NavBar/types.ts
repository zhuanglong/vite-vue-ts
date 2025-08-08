import { navBarProps as vanNavBarProps } from 'vant'
import type { ExtractPropTypes } from 'vue'

export const navBarProps = {
  leftArrow: {
    ...vanNavBarProps.leftArrow,
    default: true,
  },
} as unknown as typeof vanNavBarProps

export type NavBarProps = ExtractPropTypes<typeof navBarProps>
