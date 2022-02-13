import { GraphicalStaffEntry } from "../MusicalScore/Graphical/GraphicalStaffEntry";

export interface CustomSingleSelectOptions {
  selectMode?: boolean;
  staffEntry?: GraphicalStaffEntry;
  selectedNodeArray?: Node[];
}

function GetSingleSelectStandardValue(): CustomSingleSelectOptions {
  const value: CustomSingleSelectOptions = { selectMode: true, selectedNodeArray: [] };
  return value;
};

export { GetSingleSelectStandardValue };
