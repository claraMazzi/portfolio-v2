import cn from 'clsx'
import React, { FC } from 'react'

interface ContainerProps {
  className?: string
  children?: any
  el?: HTMLElement
  clean?: boolean
  maxWidth?: boolean
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = 'div',
  maxWidth = true,
  clean = false, // Full Width Screen
}) => {
  const rootClassName = cn(
    {
      'mx-auto w-full xs:min-w-sm px-3 xsm:px-4 relative': !clean,
      'max-w-container': maxWidth,
    },
    className
  )

  let Component: any = el as any

  return <Component className={rootClassName}>{children}</Component>
}

export default Container
