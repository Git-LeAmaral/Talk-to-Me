'use client'
import { useState } from 'react'
import Button from './Button'
import { Input } from './Input'

export function FormWrapper() {
  const [selectedRoom, setSelectedRoom] = useState<'join' | 'create'>('join')
  console.log('FormWrapper ~ selectedRoom:', selectedRoom)

  const handleSelectRoom = (room: 'join' | 'create') => {
    setSelectedRoom(room)
  }
  return (
    <div className="w-full">
      <div className="flex items-center text-center">
        <span
          className={`w-1/2 p-4 cursor-pointer ${
            selectedRoom === 'join' && 'rounded-t-lg text-primary bg-secondary '
          }`}
          onClick={() => handleSelectRoom('join')}
        >
          Ingressar
        </span>
        <span
          className={`w-1/2 p-4 cursor-pointer ${
            selectedRoom === 'create' &&
            'rounded-t-lg text-primary bg-secondary '
          }`}
          onClick={() => handleSelectRoom('create')}
        >
          Nova Reunião
        </span>
      </div>

      <div className="bg-secondary py-4 rounded-b-lg space-y-8 p-10">
        <Input placeholder="Seu nome" type="text" />
        <Input placeholder="Digite o código da reunião" type="text" />

        <Button title="Entrar" type="button" />
      </div>
    </div>
  )
}
