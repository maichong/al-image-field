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
    onChange: func.isRequired, //照片发生变化后回调
    count: number,  //最多选取的照片总数
    preLine: number //每行显示照片数
  };

  props = {
    pics: [],
    count: 9,
    preLine: 3
  };

  data = {
    pics: [],
    count: 9,
    preLine: 3,
    showPlus: true,
    width: 0,
    height: 0
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
    // console.log(parseInt(props.count / props.preLine));
    if (props.pics.length >= props.count) {
      props.pics = props.pics.slice(0, props.count);
      this.setData({
        showPlus: false
      });
    }
    this.setData({
      pics: props.pics,
      count: props.count,
      preLine: props.preLine,
    });
  }

  //新加照片
  async handleAdd() {
    let me = this;
    wx.chooseImage({
      count: me.data.count, // 默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('调用成功----', res);
        // let tempFilePaths = (res.tempFilePaths)[0];
        // let item = {};
        // item.type = 'temp';
        // item.url = 'tempFilePaths';
        // this.data.pics.push(item);
        // console.log('this.data.pics====', this.data.pics);
        // if (this.props.onChange) {
        //   this.props.onChange(this.data.pics);
        // }
      },
      fail: function (res) {
        console.log('错误数据----', res);
      },
      complete: function (res) {
        // console.log('接口调用结束----', res);
        let tempFilePaths = (res.tempFilePaths)[0];
        let item = {};
        item.type = 'temp';
        item.url = tempFilePaths;
        (me.data.pics).push(item);
        if (me.props.onChange) {
          me.props.onChange(me.data.pics);
        }
      }
    });
  }
}
