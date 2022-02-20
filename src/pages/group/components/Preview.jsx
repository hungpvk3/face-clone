import React from 'react'
import stories from '../../../assets/img/stories1.jpg'
import NavigatePreview from '../components/NavigatePreview'
import CreatePost from './CreatePost'
import Intro from '../../page/components/intro.component'

import './Preview.scss'

const Preview = () => {
  return (
    <div className="shadow h-max bg-white p-3 rounded-lg" style={{maxWidth: '924px', width: '924px', marginTop: '8%'}}>
      <h1 className="w-full bg-white m-0">
        Xem truoc tren may tinh
      </h1>
      <div className="c-preview-container overflow-auto">
        <div className="c-preview-header mx-auto rounded-lg">
          <div className="bg-white px-3 pt-4">
            <div className="max-h-80 overflow-hidden rounded-lg">
              <img src={stories} alt="" className="w-full h-full object-cover opacity-40" />
            </div>

            <div className="mt-4">
              <h1 className="text-3xl font-bold text-gray-300">Tên nhóm</h1>
              <p className="text-lg font-light text-gray-300 mt-2">Quyền riêng  tư  nhóm - <span className="font-medium text-gray-500">1 thanh vien</span></p>
            </div>

            <NavigatePreview />
          </div>
        </div>

        <div className="c-preview-main flex gap-3">
          <div className="flex-1">
            <CreatePost />
          </div>
          <div>
            <Intro />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview