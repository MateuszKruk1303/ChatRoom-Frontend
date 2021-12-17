import { useState } from 'react'

type ToggleDialog = () => void
type OpenDialog = () => void
type CloseDialog = () => void

export const useDialog = (
  initialState: boolean = false
): [boolean, ToggleDialog, OpenDialog, CloseDialog] => {
  const [isDialogOpen, setIsDialogOpen] = useState(initialState)

  const openDialog = () => setIsDialogOpen(true)

  const closeDialog = () => setIsDialogOpen(false)

  const toggleDialog = () => setIsDialogOpen(open => !open)

  return [isDialogOpen, toggleDialog, openDialog, closeDialog]
}
