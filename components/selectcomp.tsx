import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


import React from 'react'

const SelectComp = () => {
  return (
    <Select defaultValue="0">
      <SelectTrigger className="" style={{
        "borderWidth": "0px",
      }}>
        <SelectValue/>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="0">0</SelectItem>
        <SelectItem value="1">1</SelectItem>
        <SelectItem value="2">2</SelectItem>
        <SelectItem value="3">3</SelectItem>
        <SelectItem value="4">4</SelectItem>
        <SelectItem value="5">5</SelectItem>
        <SelectItem value="6">6</SelectItem>
        <SelectItem value="7">7</SelectItem>
        <SelectItem value="8">8</SelectItem>
        <SelectItem value="9">9</SelectItem>
        <SelectItem value="10">10</SelectItem>
      </SelectContent>
  </Select>
  )
}

export default SelectComp