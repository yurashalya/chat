export function setTitle(title) {
  document.title = title;
}

export function setTitleAndFaviconForAurora(pageName) {
  let title = "";
  if (pageName) {
    title = pageName;
  } else {
    title = "Chat";
  }
  setTitle(title);
}
