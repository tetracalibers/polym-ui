import _ from 'lodash'
import {
  useRef,
  useState,
  ChangeEvent,
  DragEvent,
  useCallback,
  useEffect,
} from 'react'
import { FileTypes } from './FileTypes'

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

type UseFileDropArgs = {
  acceptMimeTypes: FileTypes[]
  updateFn?: (files: File[]) => void
  selectedFiles: File[]
  multiple?: boolean
}

export const useFileDrop = ({
  acceptMimeTypes,
  updateFn,
  selectedFiles = [],
  multiple,
}: UseFileDropArgs) => {
  const [isFocusedZone, setDragzoneFocus] = useState(false)
  const [errMsg, setErrMsg] = useState<string>('')
  const [files, setFiles] = useState(selectedFiles)

  const fileInputRef = useRef<HTMLInputElement>(null)

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
    const allFiles = files.concat(acceptNewFiles)
    setFiles(allFiles)
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

  const deleteFile = (pos: number) => {
    const updated = files.filter((_, i) => i !== pos)
    setFiles(updated)
    updateFn && updateFn(updated)
  }

  const dropFieldRegister = {
    onDrop: addFile,
    onDragOver: cancelDefaultAction,
    onDragLeave: blurByDragLeave,
    onDragEnter: focusByDragEnter,
  }

  const ClickAreaRegister = {
    onClick: openFileSelectDialog,
  }

  const fileInputRegister = {
    type: 'file',
    multiple,
    accept: accept,
    ref: fileInputRef,
    onClick: openFileSelectDialog,
    onChange: addFile,
  }

  return {
    isFocusedZone,
    errMsg,
    files,
    deleteFile,
    register: {
      dropField: dropFieldRegister,
      clickArea: ClickAreaRegister,
      fileInput: fileInputRegister,
    },
  }
}
