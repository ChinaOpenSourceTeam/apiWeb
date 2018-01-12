import React from 'react';
import ReactDOM from 'react-dom';
import LzEditor from 'react-lz-editor';
import {Editor, EditorState} from 'draft-js';
import {Modal} from 'antd';
export default class MyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          content: ``
        }
        this.receiveHtml = this.receiveHtml.bind(this);
      }
      receiveHtml(content) {
        console.log("Recieved content", content);
      }
      render() {
        const uploadConfig = {
          QINIU_URL: "http://up.qiniu.com", //上传地址，现在暂只支持七牛上传 
          QINIU_IMG_TOKEN_URL: "http://www.yourServerAddress.mobi/getUptokenOfQiniu.do", //请求图片的token 
          QINIU_PFOP: {
            url: "http://www.yourServerAddress.mobi/doQiniuPicPersist.do" //七牛持久保存请求地址 
          },
          QINIU_VIDEO_TOKEN_URL: "http://www.yourServerAddress.mobi/getUptokenOfQiniu.do", //请求媒体资源的token 
          QINIU_FILE_TOKEN_URL: "http://www.yourServerAddress.mobi/getUptokenOfQiniu.do?name=patch", //其他资源的token的获取 
          QINIU_IMG_DOMAIN_URL: "https://image.yourServerAddress.mobi", //图片文件地址的前缀 
          QINIU_DOMAIN_VIDEO_URL: "https://video.yourServerAddress.mobi", //视频文件地址的前缀 
          QINIU_DOMAIN_FILE_URL: "https://static.yourServerAddress.com/", //其他文件地址前缀 
        }
        return (<div><LzEditor
          active={true}
          importContent={this.state.content}
          cbReceiver={this.receiveHtml}
          uploadConfig={uploadConfig}
          fullScreen={true}
          removeStyle={false}//移除文字样式
          image={false}//上传图片
          video={false}
          audio={false}

          />
          <Modal/>
          </div>)
      }
  }