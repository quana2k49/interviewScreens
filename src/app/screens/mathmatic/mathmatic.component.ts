import { Component, OnInit } from '@angular/core';
import { debounce } from 'lodash';

@Component({
  selector: 'app-mathmatic',
  templateUrl: './mathmatic.component.html',
  styleUrls: ['./mathmatic.component.css']
})
export class MathmaticComponent implements OnInit {
  startPoint: number = 0
  endPoint: number = 0
  inputArr = []
  resultArr = []
  logo = 'https://i.pinimg.com/originals/21/f2/0b/21f20b53eaf715a3de8c23da37eb00ce.jpg'
  constructor() { }

  ngOnInit() {
  }

  _handleChange(data, param) {
    let value = data.target.value
    if (param == 'ep') {
      this.endPoint = parseInt(value)
    }
    else {
      this.startPoint = parseInt(value)
    }
  }

  _integerChecking(data) {
    return true
  }

  _inputValidation(param) {
    if (param == 'ep') {
      return this._integerChecking(this.endPoint)
    }
    else {
      return this._integerChecking(this.startPoint)
    }
  }

  _submit() {
    this.inputArr = []
    this.resultArr = []
    for (let i = this.startPoint; i <= this.endPoint; i++) {
      this.inputArr.push(i)
      if (!!this._checkConditions(i)) {
        this.resultArr.push(i)
      }
    }
  }

  //KIỂM TRA NGUYÊN TỐ
  _checkPrime(data) {
    let res = true
    if (data == 1) {
      return false
    }
    if (data == 2) {
      return true
    }
    if (data > 2) {
      for (let i = 2; i < data - 1; i++) {
        if (data % i == 0) {
          res = false
          break
        }
        else res = true
      }
    }

    return res
  }

  //TỔNG CHỮ SỐ
  _condition1(data) {
    let tmp = data.toString()
    let sum = 0
    for (let i = 0; i < tmp.length; i++) {
      sum += parseInt(tmp[i])
    }
    if (!!this._checkPrime(sum)) {
      return true
    }
    else return false
  }

  //TỔNG BÌNH PHƯƠNG CÁC SỐ
  _condition2(data) {
    let tmp = data.toString()
    let sum = 0
    for (let i = 0; i < tmp.length; i++) {
      sum += Math.pow(parseInt(tmp[i]), 2)
    }
    if (!!this._checkPrime(sum)) {
      return true
    }
    else return false
  }

  //ĐIỀU KIỆN ĐÚNG
  _checkConditions(data) {
    if (!!this._condition1(data) && !!this._condition2(data)) {
      return true
    }
  }
}
