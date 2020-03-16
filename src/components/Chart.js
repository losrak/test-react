import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';

class Chart extends Component {

  // constructor(props){
  //   super(props);
  //   console.log(props)
  // }

  state = {
    availableColors: ['#30A9DE','#EFDC05','#E53A40','#090707','#6bc6ea', '#dcc678', '#d9cbb4', '#c7f2f7', '#d2d52c','#b04747', '#b8d2bf', '#b8c781', '#8e1343', '#912818', '#7d6b57', '#6c2e27'],
    availableColorsHover: ['#30A9DEd6','#EFDC05d6','#E53A40d6','#090707d6','#6bc6ead6', '#dcc678d6', '#d9cbb4d6', '#c7f2f7d6' ,'#d2d52cd6', '#b04747d6', '#b8d2bfd6', '#b8c781d6' ,'#8e1343d6', '#912818d6', '#7d6b57d6', '#6c2e27d6']
  }

  getData = () => {
    let labels: any[] = [];
    let colors: any[] = [];
    let colorsHover: any[] = [];
    let ntransactions: any[] = [];
    ntransactions = this.props.getTransactionsByDesAccount.map(item => item.length);
    labels = this.props.getTransactionsByDesAccount.map(item => 'Dest Account: **** ' + item[0].toAccount.toString().substr(-4));
    colors = this.state.availableColors.slice(0, labels.length);
    colorsHover = this.state.availableColors.slice(0, labels.length);
    let datos = {
      data:{
        labels: labels,
        datasets:[{
          data: ntransactions,
          backgroundColor: colors,
          hoverBackgroundColor: colorsHover
        }]
      }
    };
    return datos.data;
  }


  render() {

    return (
      <div>
        <Pie data={this.getData()} />
      </div>
    );
  }
}

export default Chart;
