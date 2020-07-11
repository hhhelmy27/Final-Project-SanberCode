import React from "react";

//Untuk membuat input untuk masukan berat
class MassInput extends React.Component {
  _handleChange = (e) => {
    this.props.onChangeMass(e.target.value);
  };

  render() {
    const { massLabel, mass } = this.props;

    return (
      <>
        <label>
          {massLabel === "kg" ? "Kilogram: " : "Pound: "}
          <input type="number" value={mass} onChange={this._handleChange} />
        </label>
        <br />
      </>
    );
  }
}

//Menampilkan masukkan berat dan melakukan convert antar dua satuannya
export default class WeightConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kilogram: 0,
      pound: 0,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    alert(`
    Kilogram: ${this.state.kilogram}
    Pound: ${this.state.pound}
    `);
  };

  onChangeKilogram = (kilogram) => {
    let pound = (parseFloat(kilogram) * 2.20462).toString();
    this.setState({ kilogram, pound });
  };

  onChangePound = (pound) => {
    let kilogram = (parseFloat(pound) / 2.20462).toString();
    this.setState({ kilogram, pound });
  };

  render() {
    const { kilogram, pound } = this.state;
    return (
      <div class="App App-header">
        <form onSubmit={this.onSubmit}>
          <MassInput
            massLabel="kg"
            mass={kilogram}
            onChangeMass={this.onChangeKilogram}
          />
          <MassInput
            massLabel="lbs"
            mass={pound}
            onChangeMass={this.onChangePound}
          />
          <button type="submit">Convert!</button>
        </form>
      </div>
    );
  }
}
