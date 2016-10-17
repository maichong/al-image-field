/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-17
 * @author Liang <liang@maichong.it>
 */

import wx from 'labrador';

const { array, func, number } = wx.PropTypes;

/*
 * Image 对象格式
 * string 代表Type为url

 {
 type: 'url',              //url或temp
 url: 'http://xxx',        //url 地址 或 temp 临时文件地址
 }
 */

export default class ImageField extends wx.Component {
  propTypes = {
    pics: array,    //照片Image对象列表
    onChange: func, //照片发生变化后回调
    count: number,  //最多选取的照片总数
    preLine: number //每行显示照片数
  };

  props = {
    pics: [],
    count: 9,
    preLine: 3
  };

  data = {
    pics: []
  };

  children = {};

  onLoad() {

  }

  onReady() {

  }

  onShow() {

  }

  onHide() {

  }

  onUnload() {

  }

  onUpdate(props) {

  }

  //新加照片
  async handleAdd() {

  }
}
