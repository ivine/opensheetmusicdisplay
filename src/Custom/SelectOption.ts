import { GraphicalStaffEntry } from "../MusicalScore/Graphical/GraphicalStaffEntry";

export interface CustomSelectOptions {
  selectMode?: CustomSelectMode;
  staffEntry?: GraphicalStaffEntry;
  selectedNoteArray?: Node[];
  startNote?: number;
  endNote?: number;

  clickTimestamp?: number;
  onDoubleClickBlankArea?: Function;

  didRenderNoteElement?: Function;
}

enum CustomSelectMode {
  "ENABLE_DOUBLE_CLICK" = "ENABLE_DOUBLE_CLICK",
  "SELECT_SINGLE_NOTE" = "SELECT_SINGLE_NOTE",
  "SELECT_NOTES" = "SELECT_NOTES",
}

const DOUBLE_CLICK_TIME_INTERVAL: number = 500;

function GetSelectStandardValue(): CustomSelectOptions {
  const value: CustomSelectOptions = {
    selectMode: CustomSelectMode.ENABLE_DOUBLE_CLICK,
    selectedNoteArray: [],
    clickTimestamp: 0
  };
  return value;
};

export { GetSelectStandardValue, CustomSelectMode, DOUBLE_CLICK_TIME_INTERVAL };
