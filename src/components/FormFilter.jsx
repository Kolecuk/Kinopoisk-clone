import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { fetchFilmsFilter } from '../redux/films-slice'
import { FormField } from './FormField'
import { FormFieldSelect } from './FormFieldSelect'
import { Button } from './Button'

export function FormFilter() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, reset, formState } = useForm({
    mode: 'onChange',
  })

  const ratingFromError = formState.errors['ratingFrom']?.message
  const ratingToError = formState.errors['ratingTo']?.message
  const yearFromError = formState.errors['yearFrom']?.message
  const yearToError = formState.errors['yearTo']?.message

  const onSubmit = (data) => {
    dispatch(fetchFilmsFilter(data))
    navigate('/films/filter/1')
  }

  const handleClickResetForm = () => reset()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="d-flex-column mx-2">
      <FormFieldSelect
        label="Тип сортировки"
        id="order"
        option={{
          RATING: "Рейтинг",
          NUM_VOTE: "Количество отзывов",
          YEAR: "Год"
        }}
        classWrapper="d-flex no-wrap justify-content-between align-items-center my-3"
        classSelect="form-control w-50"
      >
        {{
          ...register("order")
        }}
      </FormFieldSelect>

      <FormFieldSelect
        label="Тип медиа"
        id="type"
        option={{
          FILM: "Фильмы",
          TV_SHOW: "Шоу",
          TV_SERIES: "Сериалы",
          MINI_SERIES: "Мини сериалы",
          ALL: "Все"
        }}
        classWrapper="d-flex no-wrap justify-content-between align-items-center my-3"
        classSelect="form-control w-50"
      >
        {{
          ...register("type")
        }}
      </FormFieldSelect>

      <FormField
        label="Ключевое слово"
        name="keyword"
        type="text"
        placeholder="Поиск"
        id="keyword"
        classWrapper="d-flex no-wrap justify-content-between align-items-center my-3"
        classInput="form-control w-50"
      >
        {{
          ...register("keyword")
        }}
      </FormField>

      <FormField
        label="Рейтинг фильма от"
        name="ratingFrom"
        type="text"
        placeholder="0"
        id="ratingFrom"
        classWrapper="d-flex no-wrap justify-content-between align-items-center my-3"
        classInput="form-control w-50"
        error={ratingFromError}
      >
        {{
          ...register("ratingFrom", {
            pattern: {
              value: /^(([0-9][.][0-9]*)|([0-9])|(1[0]))$/,
              message: 'Значение должно быть в диапазоне от 0 до 10 (дробные числа допускаются через ".")'
            },
          })
        }}
      </FormField>

      <FormField
        label="Рейтинг фильма до"
        name="ratingTo"
        type="text"
        placeholder="10"
        id="ratingTo"
        classWrapper="d-flex no-wrap justify-content-between align-items-center my-3"
        classInput="form-control w-50"
        error={ratingToError}
      >
        {{
          ...register("ratingTo", {
            pattern: {
              value: /^(([0-9][.][0-9]*)|([0-9])|(1[0]))$/,
              message: 'Значение должно быть в диапазоне от 0 до 10 (дробные числа допускаются через ".")'
            },
          })
        }}
      </FormField>

      <FormField
        label="Год фильма от"
        name="yearFrom"
        type="text"
        placeholder="1000"
        id="yearFrom"
        classWrapper="d-flex no-wrap justify-content-between align-items-center my-3"
        classInput="form-control w-50"
        error={yearFromError}
      >
        {{
          ...register("yearFrom", {
            pattern: {
              value: /^(([1-2][0-9]{3})|(3[0]{3}))$/,
              message: 'Значение должно быть целым в диапазоне от 1000 до 3000'
            },
          })
        }}
      </FormField>

      <FormField
        label="Год фильма до"
        name="yearTo"
        type="text"
        placeholder="3000"
        id="yearTo"
        classWrapper="d-flex no-wrap justify-content-between align-items-center my-3"
        classInput="form-control w-50"
        error={yearToError}
      >
        {{
          ...register("yearTo", {
            pattern: {
              value: /^(([1-2][0-9]{3})|(3[0]{3}))$/,
              message: 'Значение должно быть целым в диапазоне от 1000 до 3000'
            },
          })
        }}
      </FormField>

      <div className="d-flex justify-content-center mt-5">
        <Button
          type="button"
          text="Сброс"
          className="btn btn-outline-danger mx-2"
          onClick={handleClickResetForm}
        />
        <Button
          type="submit"
          text="Поиск"
          className="btn btn-outline-warning mx-2"
          dataBsDismiss="offcanvas"
        />
      </div>
    </form >
  )
}