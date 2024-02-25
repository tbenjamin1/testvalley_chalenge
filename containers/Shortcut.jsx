"use client"

import React from 'react'

const Shortcut = async () => {


  const response = await fetch('https://api.testvalley.kr/main-shortcut/all', { cache: 'no-store' });
  const mainShortcut = await response.json();
  return (
    <div>Shortcut</div>
  )
}

export default Shortcut