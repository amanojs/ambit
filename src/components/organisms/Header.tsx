import * as React from 'react'

interface Props {}

type NavItem = {
  name: string
  href: string
}

const nav_item: NavItem[] = [
  { name: 'プロフィール', href: 'hogehoge' },
  { name: '通知', href: 'hugahuga' }
]

export const Header: React.FC<Props> = props => {
  return (
    <React.Fragment>
      <div className="Header">
        <div className="HeaderNavBar">
          {nav_item.map((item: NavItem) => (
            <div className="NavItem">{item.name}</div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .Header {
          width: 100%;
          height: 50px;
          padding: 10px;
          background-color: #999;
        }
        .HeaderNavBar {
          overflow: hidden;
        }
        .NavItem {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          border-radius: 60px;
          background-color: #fff;
          padding: 6px;
          color: #777;
          float: left;
        }
      `}</style>
    </React.Fragment>
  )
}
