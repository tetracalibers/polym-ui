import { useNanoId } from '@polym/hooks'
import _ from 'lodash'
import { FiUploadCloud } from 'react-icons/fi'
import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { VisuallyHidden } from '../../../a11y-helper/VisuallyHidden'
import { Button } from '../../../core/Button/core'
import { editInputStyle } from '../../styled/editInput'
import { FileTypes, imageFileTypes } from './FileTypes'
import { useFileDrop } from './useFileDrop'

const DropField = styled.div`
  ${editInputStyle}

  --danger-color: #ff0f6d;
  --active-color: #69e3eb;
  --width: 100%;

  width: var(--width);
  min-height: 200px;
  height: fit-content;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  text-decoration: none;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  /* ClickAreaの基点 */
  position: relative;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    filter: blur(0px);
    transition: 0.75s;
    transform: skewX(45deg) translateX(calc(var(--width) + 100vw));
  }

  &[data-focused='true']:before {
    transform: skewX(45deg) translateX(calc(var(--width) * -1 - 100vw));
  }

  &[data-has-error='true'] {
    border-color: var(--danger-color);
    border-style: solid;
    border-width: 2px;
  }
`

const ClickArea = styled(Button)`
  ${ResetCss.button}
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 0);
`

const FieldLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: -1rem;

  & > [data-error]::after {
    content: attr(data-error);
    color: var(--danger-color);
    display: block;
    font-size: 0.75em;
    margin: 1rem 0;
  }

  & svg {
    width: 3rem;
    height: 3rem;
  }
`

type DropzoneProps = {
  acceptMimeTypes?: FileTypes[]
  label?: string
  hasError?: boolean
  updateFn?: (files: File[]) => void
  selectedFiles?: File[]
}

export const Dropzone = ({
  acceptMimeTypes = imageFileTypes as unknown as FileTypes[],
  label = 'Upload Image',
  hasError = false,
  updateFn,
  selectedFiles = [],
}: DropzoneProps) => {
  const { isFocusedZone, errMsg, register } = useFileDrop({
    acceptMimeTypes,
    updateFn,
    selectedFiles,
  })
  const inputId = useNanoId()

  return (
    <DropField
      data-focused={isFocusedZone}
      data-has-error={hasError}
      {...register.dropField}
    >
      <ClickArea {...register.clickArea}>{label}</ClickArea>
      <VisuallyHidden aria-hidden='true'>
        <label htmlFor={inputId} tabIndex={-1}>
          {label}
        </label>
        <input id={inputId} tabIndex={-1} {...register.fileInput} />
      </VisuallyHidden>
      <FieldLabel>
        <FiUploadCloud />
        <div data-error={errMsg}>{label}</div>
      </FieldLabel>
    </DropField>
  )
}
