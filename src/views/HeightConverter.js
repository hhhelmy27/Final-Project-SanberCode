import React from "react";

//Untuk membuat input untuk masukan tinggi
class HeightInput extends React.Component {
  _handleChange = (e) => {
    this.props.onChangeHeight(e.target.value);
  }

  render() {
    const { heightLabel, height } = this.props;

    return (
      <>
        <label>
          {heightLabel === 'cm' ? 'Centimeter: ' : 'Feet: '}
          <input type="number" value={height} onChange={this._handleChange} />
        </label>
        <br />
      </>
    );
  }
}

//Menampilkan masukkan tinggi dan melakukan convert antar dua satuannya
export default class HeightConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centimeter: 0,
      feet: 0,
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert(`
    Centimeter: ${this.state.centimeter}
    Feet: ${this.state.feet}
    `)
  }

  onChangeCentimeter = (centimeter) => {
    let feet = (parseFloat(centimeter)*0.032808).toString();
    this.setState({centimeter,feet})
  }

  onChangeFeet = (feet) => {
    let centimeter = (parseFloat(feet)/0.032808).toString();
    this.setState({centimeter,feet})
  }

  render() {
    const {centimeter,feet} = this.state;
    return (
      <div class="App App-header">
      <form onSubmit={this.onSubmit}>
        <HeightInput heightLabel="cm" height={centimeter} onChangeHeight={this.onChangeCentimeter} />
        <HeightInput heightLabel="ft" height={feet} onChangeHeight={this.onChangeFeet} />
        <button type="submit">Convert!</button>
      </form>
      </div>
    );
  }
}