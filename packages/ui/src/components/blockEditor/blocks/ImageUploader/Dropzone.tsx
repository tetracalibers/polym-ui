import { useNanoId } from '@polym/hooks'
import _ from 'lodash'
import {
  useRef,
  useState,
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
} from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { VisuallyHidden } from '../../../a11y-helper/VisuallyHidden'
import { Button } from '../../../core/Button/core'

const DropField = styled.div`
  --danger-color: #ff0f6d;
  --active-color: #69e3eb;

  border: 1.5px dashed #b0bec5;
  width: 100%;
  height: 200px;

  position: relative;

  &[data-focused='true'] {
    border-color: var(--active-color);
    border-style: dotted;
  }

  &[data-has-error='true'] {
    border-color: var(--danger-color);
    border-style: solid;
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

  & > span::after {
    content: attr(data-error);
    color: var(--danger-color);
  }
`

const imageFileTypes = [
  'image/png',
  'image/jpeg',
  'image/jpg',
  'image/gif',
  'image/svg+xml',
] as const

type FileTypes = typeof imageFileTypes[number]

type DropzoneProps = {
  acceptMimeTypes?: FileTypes[]
  label?: string
  hasError?: boolean
  updateFn?: (files: File[]) => void
  selectedFiles?: File[]
}

const isDragEvt = (e: any): e is DragEvent => {
  // dataTransferを持っているかどうかで判定
  return !!e.dataTransfer
}

const isInputEl = (el: EventTarget | null): el is HTMLInputElement => {
  return el !== null
}

const getFilesFromEvent = (e: DragEvent | ChangeEvent): File[] => {
  if (isDragEvt(e)) {
    return Array.from(e.dataTransfer.files)
  }
  if (isInputEl(e.target) && e.target.files) {
    return Array.from(e.target.files)
  }
  return []
}

export const Dropzone = ({
  acceptMimeTypes = imageFileTypes as unknown as FileTypes[],
  label = 'Upload Image',
  hasError = false,
  updateFn,
  selectedFiles = [],
}: DropzoneProps) => {
  const [isFocusedZone, setDragzoneFocus] = useState(false)
  const [errMsg, setErrMsg] = useState<string>('')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const inputId = useNanoId()
  const accept = acceptMimeTypes.join(', ')

  // 入力またはdropでinputElにfileが流れ込んできたら
  const addFile = (
    e: DragEvent<HTMLDivElement> | ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    e.stopPropagation()
    // dragは終了している
    setDragzoneFocus(false)
    // 今回追加されたfile
    const addedFiles = getFilesFromEvent(e)
    // バリデーション
    const [acceptNewFiles, rejectFiles] = _.partition(addedFiles, file =>
      acceptMimeTypes.includes(file.type as FileTypes)
    )
    if (rejectFiles.length > 0) {
      setErrMsg(`Uploadable file formats: ${accept}`)
    } else {
      setErrMsg('')
    }
    const allFiles = selectedFiles!.concat(acceptNewFiles)
    updateFn && updateFn(allFiles)
  }

  // dragoverイベントは自身の上に他の要素がドラッグされている間、繰り返し発生
  // この時、デフォルトActionをキャンセルしておく必要がある
  // @see https://numb86-tech.hatenablog.com/entry/2016/04/26/145702
  const cancelDefaultAction = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  // ドラッグされている要素がzoneの範囲外に消えたらfocusを外す
  const blurByDragLeave = useCallback((e: DragEvent<HTMLDivElement>) => {
    cancelDefaultAction(e)
    setDragzoneFocus(false)
  }, [])

  // ドラッグされている要素がzoneの範囲内に来たらfocusを当てる
  const focusByDragEnter = useCallback((e: DragEvent<HTMLDivElement>) => {
    cancelDefaultAction(e)
    setDragzoneFocus(true)
  }, [])

  // ファイル選択ダイアログ表示
  const openFileSelectDialog = () => {
    fileInputRef.current?.click()
  }

  // propsで注入されるselectedFileが空になったら、inputの値も空にする
  useEffect(() => {
    if (fileInputRef.current && selectedFiles && selectedFiles.length === 0) {
      fileInputRef.current.value = ''
    }
  }, [selectedFiles])

  return (
    <DropField
      data-focused={isFocusedZone}
      data-has-error={hasError}
      onDrop={addFile}
      onDragOver={cancelDefaultAction}
      onDragLeave={blurByDragLeave}
      onDragEnter={focusByDragEnter}
    >
      <ClickArea onClick={openFileSelectDialog}>{label}</ClickArea>
      <VisuallyHidden aria-hidden='true'>
        <label htmlFor={inputId} tabIndex={-1}>
          {label}
        </label>
        <input
          type='file'
          id={inputId}
          multiple
          accept={accept}
          ref={fileInputRef}
          onClick={openFileSelectDialog}
          onChange={addFile}
          tabIndex={-1}
        />
      </VisuallyHidden>
      <FieldLabel>
        <FiUploadCloud />
        <span data-error={errMsg}>{label}</span>
      </FieldLabel>
    </DropField>
  )
}
