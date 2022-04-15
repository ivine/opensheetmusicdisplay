import { SourceMeasure } from "../MusicalScore";
import { Cursor } from "../OpenSheetMusicDisplay";
export interface NoteCursorOptions {
  enableRange: Boolean; // 在区间内播放

  startNoteIndex: number; // 开始音符的下标，如果是第一个音符 = 0
  endNoteIndex: number; // 结束音符的下标
}

export function GetNoteCursorStandardValue(): NoteCursorOptions {
  const options: NoteCursorOptions = {
    enableRange: false,
    startNoteIndex: 0,
    endNoteIndex: 0
  };
  return options;
};

export function MoveCursorIntoNote(cursor: Cursor, noteIndex: number): void {
  const tmpCursorVisible: boolean = typeof cursor.hidden === "boolean" ? cursor.hidden : true;
  cursor.hide();
  cursor.reset();
  let steps: number = noteIndex;
  while(steps > 0) {
      cursor.iterator.moveToNext();
      steps--;
  }

  if (!tmpCursorVisible) {
    cursor.update();
    cursor.show();
  }
}

// noteIndex: 在小节中的下标
export function GetNoteIndexInScore(measureList: SourceMeasure[], measureIndex: number, noteIndex: number): number {
  let noteIndexInScore: number = 0;
  let tmpCursorMeasureIndex: number = measureIndex;
  while (tmpCursorMeasureIndex > measureList.length) {
    tmpCursorMeasureIndex++;
    noteIndexInScore += measureList[tmpCursorMeasureIndex].VerticalSourceStaffEntryContainers.length;
  }
  noteIndexInScore += noteIndex;
  return noteIndexInScore;
}

// 获取音符下标在一小节中的信息
export function GetNoteInOneScoreInfo(measureList: SourceMeasure[], noteIndexInScore: number): {measureIndex: number, noteIndex: number} {
  let measureIndex: number = 0;
  let noteIndex: number = 0;
  let tmpNoteIndexInScore: number = noteIndexInScore;
  for (let m: number = 0; m < measureList.length; m++) {
    measureIndex = m;
    noteIndex = 0;
    for (let n: number = 0; n < measureList[m].VerticalSourceStaffEntryContainers.length; n++) {
      if (tmpNoteIndexInScore === 0) {
        return { measureIndex: measureIndex, noteIndex: noteIndex };
      }
      noteIndex++;
      tmpNoteIndexInScore--;
    }
  }

  return { measureIndex: measureIndex, noteIndex: noteIndex };
}
