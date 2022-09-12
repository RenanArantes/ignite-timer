import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { CyclesContext } from '../..'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto."
        disabled={!!activeCycle}
        {...register('task')}
      />
      <label htmlFor="minutesAmount">durante</label>
      <datalist id="task-suggestions">
        <option value="valor1" />
        <option value="valor2" />
        <option value="valor3" />
        <option value="valor4" />
      </datalist>

      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
