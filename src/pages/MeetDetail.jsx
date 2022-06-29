import React from 'react'
import { useGetMeetDetail } from '../Hooks/useGetMeetDetail'

const MeetDetail = () => {

  const {data} = useGetMeetDetail();

  return (
    <div>MeetDetail</div>
  )
}

export default MeetDetail