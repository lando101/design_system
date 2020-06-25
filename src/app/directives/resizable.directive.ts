import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appResizable]' // Attribute selector
})

export class ResizableDirective implements OnInit {


  @Input() resizableGrabWidth = 8;
  @Input() resizableMinWidth = 100;

  dragging = false;
  mouseClickLocation: number = 0;
  oldWidth: number = 237;

  constructor(private el: ElementRef) {

    const self = this;

    const EventListenerMode = { capture: true };

    function preventGlobalMouseEvents() {
      document.body.style['pointer-events'] = 'none';
    }

    function restoreGlobalMouseEvents() {
      document.body.style['pointer-events'] = 'auto';
    }


    const newWidth = (wid) => {
      const newWidth = Math.max(this.resizableMinWidth, wid);
      el.nativeElement.style.width = (newWidth) + "px";
    }

    const mouseMoveG = (evt) => {
      if (!this.dragging) {
        return;
      }
      newWidth((evt.clientX - this.mouseClickLocation) + this.oldWidth);
      // this.mouseClickLocation = this.mouseClickLocation * 1.001;
      console.log(evt.clientX + 'screen location');
      console.log(el.nativeElement.offsetWidth + 'old width');
      console.log('('+evt.clientX + ' - '+ this.mouseClickLocation +')' + ' + ' + el.nativeElement.offsetWidth + ' = ' + ((evt.clientX) - (this.mouseClickLocation - el.nativeElement.offsetWidth) + 'new width'));
      console.log(el);
      console.log('=============================');

      evt.stopPropagation();
    };

    const dragMoveG = (evt) => {
      if (!this.dragging) {
        return;
      }
      const newWidth = Math.max(this.resizableMinWidth, (evt.clientX - el.nativeElement.offsetLeft)) + "px";
      el.nativeElement.style.width = (evt.clientX - el.nativeElement.offsetLeft) + "px";
      console.log('hello there');
      evt.stopPropagation();
    };

    const mouseUpG = (evt) => {
      if (!this.dragging) {
        return;
      }
      restoreGlobalMouseEvents();
      this.dragging = false;
      evt.stopPropagation();
    };

    const mouseDown = (evt) => {
      if (this.inDragRegion(evt)) {
        this.dragging = true;
        preventGlobalMouseEvents();
        evt.stopPropagation();
        this.mouseClickLocation = evt.clientX;
        this.oldWidth = el.nativeElement.offsetWidth;
      }
    };


    const mouseMove = (evt) => {
      if (this.inDragRegion(evt) || this.dragging) {
        el.nativeElement.style.cursor = "col-resize";
      } else {
        el.nativeElement.style.cursor = "default";
      }
    }


    document.addEventListener('mousemove', mouseMoveG, true);
    document.addEventListener('mouseup', mouseUpG, true);
    el.nativeElement.addEventListener('mousedown', mouseDown, true);
    el.nativeElement.addEventListener('mousemove', mouseMove, true);
  }

  ngOnInit(): void {
    // this.el.nativeElement.style["border-right"] = this.resizableGrabWidth + "px solid transparent";
    this.el.nativeElement.style["border-right"] = "0px";

  }

  inDragRegion(evt) {
    return this.el.nativeElement.clientWidth - evt.clientX + this.el.nativeElement.offsetLeft < this.resizableGrabWidth;
  }

}
