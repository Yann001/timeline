<template>
  <div id="app">
    <div class="axis" id="axis"></div>
  </div>
</template>

<script>
import Timeline from '@/src/js/timeline';
export default {
  name: 'app',
  data () {
    return {}
  },
  mounted () {
    let things = [
      {
        id: 'event-001',
        date:'2017-08-01',
        desc: 'Promote T2.1',
        img: '',
        remark: ''
      },
      {
        id: 'event-002',
        date:'2017-05-01',
        desc: 'Promote T1.3',
        img: '',
        remark: ''
      },
      {
        id: 'event-003',
        date:'2016-09-01',
        desc: 'Join HUST',
        img: '',
        remark: ''
      },
      {
        id: 'event-004',
        date:'2017-03-01',
        desc: 'Join tencent',
        // img: 'https://s1.ax1x.com/2017/10/03/15SdP.jpg',
        remark: ''
      },
      {
        id: 'event-005',
        date:'2016-06-20',
        desc: 'Graduated NCU',
        // img: 'https://s1.ax1x.com/2017/10/03/15SdP.jpg',
        remark: ''
      }
    ];
    new Timeline(things);
  }
}
</script>

<style lang="scss">
// can't import, don't konw why
// @import '~/src/css/timeline.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.axis {
  position: relative;
  top: 0;
  left: 50%;
  margin-left: -4px;
  border-radius: 2px;
  background-color: #999999;
}

.axis canvas {
  position: absolute;
}

.axis>div {
  position: absolute;
  box-sizing: border-box;
  padding-left: 5px;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}

.axis>div.left {
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-left: 1px solid #000;
}

.axis>div.right {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-right: 1px solid #000;
}
// h1, h2 {
//   font-weight: normal;
// }

// ul {
//   list-style-type: none;
//   padding: 0;
// }

// li {
//   display: inline-block;
//   margin: 0 10px;
// }

// a {
//   color: #42b983;
// }
</style>
