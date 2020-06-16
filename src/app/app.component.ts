import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .item {
      font-size: 20px;
      border-bottom: solid 1px #ccc;
      color: rgba(0, 0, 0, 0.87);
      padding: 20px;
    }
    .dragDropContainer {
      border: solid 1px #ccc;
      width: 60%;
    }
    .dragDropWrap {
      display: flex;
      flex-direction: row;
      margin: 20px;
    }
    .dragDropInnerWrap {
      flex: 1;
    }
    .cdk-drag-preview {
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                  0 8px 10px 1px rgba(0, 0, 0, 0.14),
                  0 3px 14px 2px rgba(0, 0, 0, 0.12);
    }
  `]
})
export class AppComponent {
  title = 'Drag Drop';
  numbers: number[] = [];
  otherNum: number[] = [];
  toDo = [
    'Get To Work',
    'Pick Up Progress',
    'Go Home',
    'Fall Asleep'
  ];
  done= [
    'Get Up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  constructor() {
    for(let i = 0; i < 10; i++) {
      this.numbers.push(i);
    }
  }

  drop(event: CdkDragDrop<number[]>) {
    
    if(event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,event.container.data, event.previousIndex, event.currentIndex )
    } else {
      moveItemInArray(event.container.data, event.previousIndex,event.currentIndex);
    }
  }
}