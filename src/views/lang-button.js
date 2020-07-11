import React from 'react';
import { LangContext } from './lang-context';

//Menampilkan button sesuai dengan bahasa yg dipilih
class LangedButton extends React.Component {
  render() {
    let props = this.props;
    let lang = this.context;
    return (
      <button
        {...props}
        style={{ backgroundColor: lang.background, color:lang.foreground}}
      >{lang.textbtn}
      </button>
    );
  }
}
LangedButton.contextType = LangContext;

export default LangedButton;