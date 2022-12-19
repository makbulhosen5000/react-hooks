import React, { memo } from 'react'

function message({countMessage}) {
  console.log('message rendering');
  return (
    <div>sent {countMessage} message</div>
  )
}

export default memo(message)