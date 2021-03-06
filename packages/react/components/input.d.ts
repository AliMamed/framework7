import * as React from 'react';

declare namespace F7Input {
  interface Props {
    slot? : string
    type? : string
    name? : string
    value? : string | number | Array<any> | Date | Object
    defaultValue? : string | number | Array<any>
    inputmode? : string
    placeholder? : string
    id? : string | number
    className? : string
    style? : React.CSSProperties
    inputId? : string | number
    size? : string | number
    accept? : string | number
    autocomplete? : string
    autocorrect? : string
    autocapitalize? : string
    spellcheck? : string
    autofocus? : boolean
    autosave? : string
    checked? : boolean
    disabled? : boolean
    max? : string | number
    min? : string | number
    step? : string | number
    maxlength? : string | number
    minlength? : string | number
    multiple? : boolean
    readonly? : boolean
    required? : boolean
    pattern? : string
    validate? : boolean | string
    validateOnBlur? : boolean
    onValidate? : Function
    tabindex? : string | number
    resizable? : boolean
    clearButton? : boolean
    noFormStoreData? : boolean
    noStoreData? : boolean
    ignoreStoreData? : boolean
    errorMessage? : string
    errorMessageForce? : boolean
    info? : string
    outline? : boolean
    wrap? : boolean
    dropdown? : string | boolean
    calendarParams? : Object
    colorPickerParams? : Object
    textEditorParams? : Object
    color? : string
    colorTheme? : string
    textColor? : string
    bgColor? : string
    borderColor? : string
    rippleColor? : string
    themeDark? : boolean
    inputStyle? : React.CSSProperties
    onCalendarChange? : (calendarValue?: any) => void
    onColorPickerChange? : (colorPickerValue?: any) => void
    onTextareaResize? : (event?: any) => void
    onInputNotEmpty? : (event?: any) => void
    onInputEmpty? : (event?: any) => void
    onInputClear? : (event?: any) => void
    onInput? : (...args: any[]) => void
    onFocus? : (...args: any[]) => void
    onBlur? : (...args: any[]) => void
    onChange? : (...args: any[]) => void
    onTextEditorChange? : (...args: any[]) => void
  }
}
declare class F7Input extends React.Component<F7Input.Props, {}> {
  domValue() : unknown
  inputHasValue() : unknown
  validateInput(inputEl? : any) : unknown
  onTextareaResize(event? : any) : unknown
  onInputNotEmpty(event? : any) : unknown
  onInputEmpty(event? : any) : unknown
  onInputClear(event? : any) : unknown
  onInput(...args : any[]) : unknown
  onFocus(...args : any[]) : unknown
  onBlur(...args : any[]) : unknown
  onChange(...args : any[]) : unknown
}
export default F7Input;