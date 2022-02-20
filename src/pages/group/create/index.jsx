import React from 'react'
import NavigateCreate from '../components/NavigateCreate'
import BaseNavigte from '../../stories/components/navigate/BaseNavigate'
import Preview from '../components/Preview'

const CreatePage = () => {
  return (
    <div className="flex ">
        <BaseNavigte>
            <NavigateCreate />
        </BaseNavigte>

        <div className="mx-auto">
            <Preview />
        </div>
    </div>
  )
}

export default CreatePage