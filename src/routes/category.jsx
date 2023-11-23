import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
function Category() {
  const queryClient = useQueryClient();

  return (
    <div>category</div>
  )
}

export default Category