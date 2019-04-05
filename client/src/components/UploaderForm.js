import React from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment'
import 'moment/locale/it'
import 'react-day-picker/lib/style.css'

const UploaderForm = ({
  errorMessage,
  amount,
  onSubmit,
  handleAmount,
  handleDayChange,
  renderErrors,
  renderUploadButtonAndImage
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '50%'
      }}
    >
      <h3 className="center-align">Upload a Photo</h3>
      <input
        type="number"
        placeholder="Enter amount here"
        value={amount}
        onChange={handleAmount}
      />
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        placeholder={`${formatDate(new Date())}`}
        onDayChange={handleDayChange}
      />
      {renderUploadButtonAndImage()}
      {renderErrors(errorMessage)}
      <button
        className="waves-effect waves-light btn-large"
        style={{
          marginTop: '90px',
          display: `${errorMessage}` ? 'none' : null
        }}
      >
        Submit
      </button>
    </form>
  )
}

export default UploaderForm
