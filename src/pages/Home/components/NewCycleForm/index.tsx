import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

import { useForm } from 'react-hook-form'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa.'),
  minutesAmount: zod
    .number()
    .min(1)
    .max(60, 'O ciclo precisa ser no máximo de 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })

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
