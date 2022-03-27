
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
