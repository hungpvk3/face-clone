import React from 'react'

import './Introduce.scss'
import { Global, Group, Eye } from '../../../components/icons'

const Introduce = () => {
  return (
    <div className="group-intro-container shadow">
        <h1 className="group-intro-title">Gioi thieu</h1>
        <span className="group-intro-desc">Bo toc mixi - Do Phung - Do toc - Noi chia se thong tin ve Do Toc</span>
        <div className="group-intro-info">
          <div className="group-intro-info-item">
            <Global css="h-5 w-5 translate-y-1" />
            <div>
              <h1>Cong khai</h1>
              <span>Ai cung co the thay</span>
            </div>
          </div>

          <div className="group-intro-info-item">
            <Eye css="h-5 w-5 translate-y-1" />
            <div>
              <h1>Hien thi</h1>
              <span>Ai cung co the thay</span>
            </div>
          </div>

          <div className="group-intro-info-item">
            <Group />
            <div>
              <h1>Tong quat</h1>
            </div>
          </div>
        </div>

        <button className="group-intro-button">
          Tim hieu them
        </button>
    </div>
  )
}

export default Introduce