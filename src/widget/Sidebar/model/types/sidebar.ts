import React from 'react'

export interface SidebarItemType {
  route: string
  text: string
  authOnly?: boolean
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}
