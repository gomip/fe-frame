import * as React from 'react'
import {ComUserMst} from '../API'
import service from './service'

/**
 * 2021.01.11 | gomip | created
 * @constructor
 */

const {useState, useEffect} = React

export const Test: React.FC = () => {
  // State -------------------------------------------------------------------------------------------------------------
  const [user, setUser] = useState<ComUserMst[]>()
  // Function ----------------------------------------------------------------------------------------------------------


  // API ---------------------------------------------------------------------------------------------------------------
  const getUser = async () => {
    return await service.getUser()
  }

  // LifeCycle ---------------------------------------------------------------------------------------------------------
  useEffect(() => {
    getUser().then(res => console.log(res.data))
  },[])
  // Dom ---------------------------------------------------------------------------------------------------------------
  return (
    <div>hihihi</div>
  )
}
