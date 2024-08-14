import React, { ReactNode } from 'react'

export default function Layout({children} :{children:ReactNode}) {
  return (
    <div>
        <h2>iam only dashboord layout</h2>
      {children}
    </div>
  )
}
