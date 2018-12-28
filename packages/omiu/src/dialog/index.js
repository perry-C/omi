import { define, WeElement } from 'omi'
import style from './_index.css'


define('o-dialog', class extends WeElement {
  close = () => {
    this.props.onClose && this.props.onClose()
  }

  confirm = () => {
    this.props.onConfirm && this.props.onConfirm()
  }

  css() {
    return style
  }

  render(props) {
    const display = props.show ? 'block' : 'none'
    return (

      <div class="o-dialog" style={{ display }}>
        <div class='content'>


          <h1>{props.title}</h1>
          <p>{props.content}</p>
          {props.type === 'confirm' ? (
            <div>
              <a class="close" onClick={this.close}>
                取消
              </a>
              <a class="ok" onClick={this.confirm}>确定</a>
            </div>
          ) : (
              <a class="ok" onClick={this.confirm}>确定</a>
            )}
        </div>
      </div>


    )
  }
})
