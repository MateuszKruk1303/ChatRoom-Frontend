import { useFormContext, useController } from 'react-hook-form'
import { DatePicker, DatePickerProps } from '@mui/lab'
import { TextField } from '@mui/material'
import { Tooltip } from '@mui/material'

const DEFAULT_DATE_FORMAT = 'MM/dd/yyyy'

export interface DateFieldProps extends Partial<DatePickerProps> {
  name: string
  defaultValue?: Date | string | null
  parseToIsoString?: boolean
  disabledMessage?: string
}

const DateField = ({
  name,
  label,
  defaultValue = null,
  parseToIsoString = false,
  disabled,
  disabledMessage,
  renderInput,
  ...props
}: DateFieldProps) => {
  const { control } = useFormContext()
  const {
    field: { ref, onChange, ...inputProps },
    fieldState: { error },
  } = useController({ control, name, defaultValue })

  const handleChange = (date: any) => {
    try {
      onChange(parseToIsoString ? date?.toISOString() || null : date)
    } catch {
      onChange(null)
    }
  }

  return disabledMessage ? (
    <Tooltip
      title={disabledMessage}
      disableFocusListener={!disabled}
      disableHoverListener={!disabled}
      disableTouchListener={!disabled}
    >
      <span>
        <DatePicker
          label={label}
          inputRef={ref}
          onChange={handleChange}
          disabled={disabled}
          inputFormat={DEFAULT_DATE_FORMAT}
          renderInput={props => (
            <TextField {...props} error={!!error} helperText={error?.message} />
          )}
          {...inputProps}
          {...props}
        />
      </span>
    </Tooltip>
  ) : (
    <DatePicker
      label={label}
      inputRef={ref}
      onChange={handleChange}
      disabled={disabled}
      inputFormat={DEFAULT_DATE_FORMAT}
      renderInput={props => (
        <TextField {...props} error={!!error} helperText={error?.message} />
      )}
      {...inputProps}
      {...props}
    />
  )
}

export default DateField
