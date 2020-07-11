import React from "react";
import { LangContext, langs } from "./lang-context";
import LangedButton from "./lang-button";

//Untuk menentukan kategori BMI dari indeks BMI yang didapat
function BmiCategory(bmi) {
  return bmi < 18.5
    ? "Underweight"
    : bmi < 25
    ? "Normal Weight"
    : bmi < 30
    ? "Overweight"
    : "Obesity";
}


//Menggunakan function component dan context api
//Untuk menyediakan opsi bahasa indonesia dan inggris
function Toolbar(props) {
  return <LangedButton onClick={props.changeLang} />;
}

export default class BodyMassIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: "",
      height: "",
      lang: langs.eng,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.toggleLang = () => {
      this.setState((state) => ({
        lang: state.lang === langs.eng ? langs.ind : langs.eng,
      }));
    };
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit(event) {
    const { weight, height } = this.state;
    let meter = height / 100;
    let bmi = (weight / meter ** 2).toFixed(1);
    let category = BmiCategory(bmi);
    alert(`
    With ${weight} kg and ${height} cm,
    Your Body Mass Index is ${bmi}, you are at ${category}`);
    event.preventDefault();
  }

  render() {
    const { weight, height } = this.state;
    //Terdapat dua hal utama:
    //Pertama penjelasan singkat mengenai apa itu BMI dengan opsi bahasa indonesia dan inggris
    //Kedua input berat dan tinggi untuk menentukan BMI dan kategorinya
    return (
      <div className="App App-header">
        <div>
          <LangContext.Provider value={this.state.lang}>
            <p class="text-box">{this.state.lang.text}</p>
            <Toolbar changeLang={this.toggleLang} />
          </LangContext.Provider>
        </div>

        <form
          onSubmit={this.onSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>
            Weight:
            <input
              name="weight"
              type="number"
              placeholder="kg"
              value={weight}
              onChange={this.onChange}
            />
          </label>
          <label>
            Height:
            <input
              name="height"
              type="number"
              placeholder="cm"
              value={height}
              onChange={this.onChange}
            />
          </label>
          <button type="submit">Check BMI</button>
        </form>
      </div>
    );
  }
}
