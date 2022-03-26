
export interface RenderingOptions {
  // note svg 的画布被渲染
  didRenderNoteContainerDiv?:  Function;

  // 一个 note svg 被渲染
  didRenderNoteSVG?: Function;
}

export function GetRenderingStandardValue(): RenderingOptions {
  const options: RenderingOptions = {};
  return options;
};
