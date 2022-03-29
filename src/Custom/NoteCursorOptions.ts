import { SourceMeasure } from "../MusicalScore";
import { Cursor } from "../OpenSheetMusicDisplay";

export interface NoteCursorOptions {
  enableRange: Boolean; // 在区间内播放
  notesRange?: [];  // 音符的区间

  startMeasureIndex: number;  // 开始音符的小节下标，如果是第一小节 = 0
  startNoteIndex: number; // 开始音符的下标，如果是第一个音符 = 0

  endMeasureIndex: number;  // 结束音符的小节下标
  endNoteIndex: number; // 结束音符的下标
}

export function GetNoteCursorStandardValue(): NoteCursorOptions {
  const options: NoteCursorOptions = {
    enableRange: false,
    startMeasureIndex: 0,
    startNoteIndex: 0,
    endMeasureIndex: 0,
    endNoteIndex: 0
  };
  return options;
};

export function GetCursorStartNoteStepsInSetRanges(
  measureList: SourceMeasure[],
  startMeasureIndex: number,
  startNoteIndex: number,
): number {
  let steps: number = 0;
  if (startMeasureIndex >= 0) {
      let tmpMeasureIndex: number = startMeasureIndex;
      while (tmpMeasureIndex >= 0) {
          const tmpMeasure: SourceMeasure = measureList[tmpMeasureIndex];
          if (tmpMeasureIndex === startMeasureIndex) {
              steps += startNoteIndex;
          } else {
              steps += tmpMeasure.VerticalSourceStaffEntryContainers.length;
          }
          tmpMeasureIndex--;
      }
  }
  return steps;
}

export function MoveCursorWithSteps(cursor: Cursor, steps: number): void {
  const tmpCursorVisible: boolean = typeof cursor.hidden === "boolean" ? cursor.hidden : true;
  cursor.hide();
  cursor.reset();
  while(steps > 0) {
      cursor.iterator.moveToNext();
      steps--;
  }

  if (!tmpCursorVisible) {
    cursor.update();
    cursor.show();
  }
}
