<template>
  <div id="app">
    <div class="axis" id="axis"></div>
  </div>
</template>

<script>
import TagFactory from '@/src/js/tag-factory';
// import Timeline from '@/src/js/timeline';
export default {
  name: 'app',
  data () {
    return {}
  },
  mounted () {
    let box = document.querySelector('#app');
    let data = [
      {
        type: 'div',
        text: '测试较少文字',
        attr: {
          id: 'div-id',
          class: 'div-class'
        },
        css: {
          color: 'red',
          fontSize: '20px',
          border: '1px solid red'
        }
      },
      {
        type: 'a',
        text: 'a标签',
        attr: {
          id: 'a-id',
          class: 'a-class',
          href: 'https://github.com/930team/timeline'
        },
        css: {
          border: '1px solid black'
        }
      },
      {
        type: 'div',
        text: '测试较多文字，测试较多文字，测试较多文字，测试较多文字，测试较多文字，测试较多文字，测试较多文字，测试较多文字，测试较多文字',
        attr: {},
        css: {
          color: 'blue',
          border: '1px solid blue',
          borderRadius: '5px'
        }
      },
      {
        type: 'img',
        text: '',
        attr: {
          class: 'img-class',
          // what should I use statics images?
          // src: '@/develop/assets/logo.png',
          src: 'https://s1.ax1x.com/2017/10/03/15SdP.jpg',
          alt: '测试图片',
          title: '测试图片自定义图片大小'
        },
        css: {
          width: '200px',
          height: '200px',
          borderRadius: '5px'
        }
      },
      {
        type: 'img',
        text: '',
        attr: {
          class: 'img-class',
          // src: '@/develop/assets/logo.png',
          src: 'https://s1.ax1x.com/2017/10/03/15SdP.jpg',
          alt: '测试图片',
          title: '测试图片使用组件默认图片大小（120*90）'
        },
        css: {}
      },
      {
        type: 'div',
        text: `测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，
               测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，
               测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，
               测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，
               测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，
               测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，
               测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，
               测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，
               测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字，测试超级多文字。`,
        attr: {},
        css: {
          color: 'blue',
          border: '1px solid blue',
          borderRadius: '5px'
        }
      }
    ]
    let tf = new TagFactory();
    data.forEach((i) => {
      let res = tf.getTagDetail(i.type, i.text, i.attr, i.css);
      box.appendChild(res.node);
      console.log(res.node.tagName + ' node width: ' + res.width);
      console.log(res.node.tagName + ' node height: ' + res.height);
    });

    // let things = [
    //   {
    //     id: 'event-001',
    //     date:'2017-08-01',
    //     desc: 'Promote T2.1',
    //     img: '',
    //     remark: ''
    //   },
    //   {
    //     id: 'event-002',
    //     date:'2017-05-01',
    //     desc: 'Promote T1.3',
    //     img: '',
    //     remark: ''
    //   },
    //   {
    //     id: 'event-003',
    //     date:'2016-09-01',
    //     desc: 'Join HUST',
    //     img: '',
    //     remark: ''
    //   },
    //   {
    //     id: 'event-004',
    //     date:'2017-03-01',
    //     desc: 'Join tencent',
    //     // img: 'https://s1.ax1x.com/2017/10/03/15SdP.jpg',
    //     remark: ''
    //   },
    //   {
    //     id: 'event-005',
    //     date:'2016-06-20',
    //     desc: 'Graduated NCU',
    //     // img: 'https://s1.ax1x.com/2017/10/03/15SdP.jpg',
    //     remark: ''
    //   }
    // ];
    // new Timeline(things);
  }
}
</script>

<style lang="scss">
@import '~@/src/css/timeline.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
