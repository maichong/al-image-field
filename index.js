/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-17
 * @author Liang <liang@maichong.it>
 */

import wx from 'labrador';
import immutable from 'seamless-immutable';

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
    preLine: number, //每行显示照片数
    padding: number  //照片的间距 单位rpx
  };

  props = {
    pics: [],
    count: 9,
    preLine: 3,
    padding: 20
  };

  data = {
    pics: immutable([]),
    count: 0,
    style: ''
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
    let preLine = props.preLine;
    let data = {
      count: props.count
    };
    let size = (750 - ((preLine + 1) * props.padding)) / preLine;
    data.style = `width:${size}rpx;height:${size}rpx;margin:${props.padding}rpx 0 0 ${props.padding}rpx`;
    if (props.pics !== this.props.pics) {
      let pics = [];
      props.pics.forEach((pic) => {
        if (typeof pic === 'string') {
          pics.push(immutable({ type: 'url', url: pic }));
        } else {
          pics.push(immutable(pic));
        }
      });
      data.pics = immutable(pics);
    }
    this.setData(data);
  }

  //新加照片
  async handleAdd() {
    try {
      let res = await wx.chooseImage({
        count: this.props.count - this.data.pics.length,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera']
      });
      let pics = this.data.pics.asMutable();
      res.tempFilePaths.forEach((url) => {
        pics.push(immutable({
          type: 'temp',
          url
        }));
      });
      this.props.onChange(immutable(pics));
    } catch (error) {
      console.error(error.stack);
    }
  }
}
