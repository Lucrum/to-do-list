// this function is from mdn docs
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function saveData(projects, currentProjectId, nextProjectId) {
  localStorage.setItem('projects', JSON.stringify(projects))
  localStorage.setItem('currentProjectId', currentProjectId)
  localStorage.setItem('nextProjectId', nextProjectId)
}

// need to parse and assign prototypes from JSON

export function getData() {
  let projects = JSON.parse(localStorage.getItem('projects'))
  let currentProjectId = localStorage.getItem('currentProjectId')
  let nextProjectId = localStorage.getItem('nextProjectId')

  return {
    projects: projects,
    currentProjectId: currentProjectId,
    nextProjectId: nextProjectId,
  }
}