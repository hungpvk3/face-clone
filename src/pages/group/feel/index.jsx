import React from 'react'

import './Feel.scss'
import BaseNavigte from '../../stories/components/navigate/BaseNavigate'
import NavigateFeel from '../components/NavigateFeel'
import GroupForMe from '../components/GroupForMe'
import Video from '../../../components/video'
import Post from '../../../components/post'

const Feel = () => {
  return (
    <div className="flex">
      <BaseNavigte>
        <NavigateFeel />
      </BaseNavigte>

      <div className="pt-16 group-feel">
        <div className="">
          <Video />
          <Post imgPost={'https://thuthuatnhanh.com/wp-content/uploads/2019/04/anh-cute.jpg'} />
        </div>
        <GroupForMe />
      </div>
    </div>
  )
}

export default Feel