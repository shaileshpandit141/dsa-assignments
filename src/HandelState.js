function setState(el, stateName, stateValue) {
    el.setAttribute(stateName, stateValue)
}

function getState(el, stateName) {
    return el.getAttribute(stateName)
}
export {setState, getState} 