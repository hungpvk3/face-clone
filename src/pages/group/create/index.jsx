import React, {useState} from 'react'
import NavigateCreate from '../components/NavigateCreate'
import BaseNavigte from '../../stories/components/navigate/BaseNavigate'
import Preview from '../components/Preview'

const CreatePage = () => {
  const [ruleValue, setRuleValue] = useState('');
  const [nameGroup, setNameGroup] = useState('');

  const handleChangeRuleValue = (value) => {
    setRuleValue(value)
  }

  const handleChangeName = (e) => {
    setNameGroup(e.target.value)
  }

  return (
    <div className="flex">
        <BaseNavigte>
            <NavigateCreate 
              ruleValue={ruleValue}
              onChangeRuleValue={handleChangeRuleValue} 
              onChangeName={handleChangeName} 
            />
        </BaseNavigte>

        <div className="mx-auto">
            <Preview ruleValue={ruleValue} nameGroup={nameGroup}/>
        </div>
    </div>
  )
}

export default CreatePage