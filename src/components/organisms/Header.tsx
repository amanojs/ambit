import * as React from 'react'
import * as Color from '../../constant/color'
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
        <div className="HeaderBody">
          <div className="LOGO">Ambit</div>
          <div className="HeaderNavBar">
            {nav_item.map((item: NavItem) => (
              <div className="NavItem">{item.name}</div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .Header {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          background-color: ${Color.main_color};
        }
        .HeaderBody {
          width: 1300px;
          height: 80px;
        }
        .LOGO {
          display: flex;
          align-items: center;
          height: 80px;
          float: left;
          color: #fff;
          font-size: 26px;
          font-weight: bold;
        }
        .HeaderNavBar {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          height: 80px;
          overflow: hidden;
        }
        .NavItem {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100px;
          border-radius: 4px;
          background-color: #fff;
          margin-left: 5px;
          padding: 9px;
          color: #777;
          font-size: 12px;
          float: left;
        }
      `}</style>
    </React.Fragment>
  )
}
