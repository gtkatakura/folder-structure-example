import React from 'react'
import { UserNameField } from 'screens/Users/shared/UserNameField'
import { UserNameText } from 'components/core/UserNameText'
import { PasswordFieldEditable } from 'screens/Users/screens/Edit/components'

// import { Button } from 'components/ui/Button'

const Button2 = import('components/ui/Button')

export default function NewUserScreen() {
  return (
    <UserNameText />
  )
}
