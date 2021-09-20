import { tag, h, WeElement, extractClass } from 'omi'
import * as css from './index.scss'

import '@omiu/icon/done'
import '@omiu/icon/warning'
import '@omiu/icon/info'
import '@omiu/icon/close'
import '@omiu/icon/error-outline'

interface Props {
  message?: string
  anchor_origin?: {
    horizontal: 'center' | 'left' | 'right'
    vertical: 'bottom' | 'top'
  }
  severity: 'primary' | 'success' | 'warning' | 'danger' | 'info'
  open: boolean
  auto_hide_duration: number
}

@tag('o-snackbar')
export default class SnackBar extends WeElement<Props> {
  static css = css.default ? css.default : css

  snackBar: HTMLElement
  sbShown: boolean
  closeTimer: any
  fadeOutTimer: any

  static defaultProps = {
    message: 'default text',
    anchor_origin: { horizontal: 'center', vertical: 'bottom' },
    severity: 'success',
    open: false,
    auto_hide_duration: 3000
  }

  static propTypes = {
    message: String,
    anchor_origin: Object,
    severity: String,
    open: Boolean,
    auto_hide_duration: Number
  }

  iconList = {
    primary: <o-icon-done></o-icon-done>,
    success: <o-icon-done></o-icon-done>,
    warning: <o-icon-warning></o-icon-warning>,
    danger: <o-icon-error-outline></o-icon-error-outline>,
    info: <o-icon-info></o-icon-info>
  }

  installed() {
    this.snackBar = this.shadowRoot?.querySelector('#o-snackbar') as any
  }

  updated() {
    if (this.props.open) {
      //prevent further actions if sb already shown
      if (this.sbShown) {
        return
      }
      this.resetTimer()
      this.sbShown = true

      this.snackBar.classList.add(`show-${this.props.anchor_origin?.vertical}`)
      //add 0.5s fade-out animation before close
      this.fadeOutTimer = setTimeout(() => {
        this.snackBar.classList.add(
          `hide-${this.props.anchor_origin?.vertical}`
        )
      }, this.props.auto_hide_duration - 500)
      //reset everything after the fade-out animation is done
      this.closeTimer = setTimeout(() => {
        this.closeSnackBar()
      }, this.props.auto_hide_duration)
    }
  }
  resetTimer = () => {
    clearTimeout(this.fadeOutTimer)
    clearTimeout(this.closeTimer)
  }
  closeSnackBar = () => {
    this.snackBar.classList.remove(`show-${this.props.anchor_origin?.vertical}`)
    this.snackBar.classList.remove(`hide-${this.props.anchor_origin?.vertical}`)
    this.props.open = false
    this.sbShown = false
  }

  handleClose = (evt: any) => {
    this.resetTimer()
    this.snackBar.classList.add(`hide-${this.props.anchor_origin?.vertical}`)
    //reset everything after the fade-out animation is done
    this.closeTimer = setTimeout(() => {
      this.closeSnackBar()
    }, 500)
  }

  render(props: Props) {
    return (
      <div>
        <div
          id="o-snackbar"
          {...extractClass(props, {
            ['anchor-' + props.anchor_origin?.horizontal]:
              props.anchor_origin?.horizontal,
            ['anchor-' + props.anchor_origin?.vertical]:
              props.anchor_origin?.vertical,
            ['o-snackbar-' + props.severity]: props.severity
          })}
        >
          <div id="bar-svg">{this.iconList[props.severity]}</div>
          <div id="bar-text">{this.props.message}</div>
          <button id="bar-close" onClick={this.handleClose}>
            <o-icon-close></o-icon-close>
          </button>
        </div>
      </div>
    )
  }
}
