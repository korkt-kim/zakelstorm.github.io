import { Flex } from '@zakelstorm/ui'
import { PropsWithChildren } from 'react'

export const LAYOUT_SIDEBAR_WIDTH = 320

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <aside
      className={`fixed right-0 bottom-0 top-0 bg-neutral-800 z-40 p-[20px] w-[${LAYOUT_SIDEBAR_WIDTH}px] text-gray-300`}>
      <Flex direction='v' align='center'>
        {children}
      </Flex>
    </aside>
  )
}