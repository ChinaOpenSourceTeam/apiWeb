import React from 'react'
import ReactDOM from 'react-dom'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class MyEditorV2 extends React.Component {

    state = {
        htmlContent: ''
      }
    
      render() {
    
        const editorProps = {
          placeholder: 'Hello World!',
          initialContent: '',
          onHTMLChange: this.handleHTMLChange,
          viewWrapper: '.demo',
          // 增加自定义预览按钮
          extendControls: [
            {
              type: 'split',
            },
            {
              type: 'button',
              text: '预览',
              className: 'preview-button',
              onClick: () => {
                window.open().document.write(this.state.htmlContent)
              }
            }, {
              type: 'dropdown',
              text: <span>下拉菜单</span>,
              component: <h1 style={{width: 200, color: '#ffffff', padding: 10, margin: 0}}>Hello World!</h1>
            }, {
              type: 'modal',
              text: <span style={{paddingRight: 10,paddingLeft: 10}}>弹出菜单</span>,
              className: 'modal-button',
              modal: {
                title: '这是一个弹出框',
                showClose: true,
                showCancel: true,
                showConfirm: true,
                confirmable: true,
                onConfirm: () => console.log(1),
                onCancel: () => console.log(2),
                onClose: () => console.log(3),
                children: (
                  <div style={{width: 480, height: 320, padding: 30}}>
                    <span>Hello World！</span>
                  </div>
                )
              }
            }
          ]
        }
    
        return (
          <div className="demo">
            <BraftEditor {...editorProps} />
          </div>
        )
    
      }
    
      handleHTMLChange = (htmlContent) => {
        this.setState({ htmlContent })
      }

      getContent=()=>{
        return this.state.htmlContent;
      }

}