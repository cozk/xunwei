import {Component, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-index-rotation',
  templateUrl: './index-rotation.component.html',
  styleUrls: ['./index-rotation.component.css']
})
export class IndexRotationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // $(function () {
      $('.shutter').shutter({
        shutterW: $(document).width(), // 容器宽度
        shutterH: 550, // 容器高度
        isAutoPlay: true, // 是否自动播放
        playInterval: 5000, // 自动播放时间
        curDisplay: 3, // 当前显示页
        fullPage: false // 是否全屏展示
      });
    // });
  }
}
