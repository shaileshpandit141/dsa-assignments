import RenderToHtml from './RenaderToHtml.js'
import DropDownEl from './Components/DropDown.js'
import {setState, getState} from './HandelState.js'
import AssignmentsData from '../Assignments/AssignmentsData.js'
import AssignmentsCard from './Components/AssignmentCard.js'
import DetailPage from './Components/DetailPage.js'


// || Root Element 
const rootEl = document.getElementById('root')
const cardsWrapperEl = document.getElementById('cards--wrapper')


// || Reader All Data 
const DropDownElId = document.getElementById('dropDownElId')
for (let i=AssignmentsData.length; i>0; i--) {
    let data = AssignmentsData[i-1]
    RenderToHtml(cardsWrapperEl, AssignmentsCard(data))
    RenderToHtml(DropDownElId, DropDownEl(data))
}


// || Hendel Dropdoen Assignments
const assignmentsBtnEl = document.getElementById('assignmentsBtn') 
const dropDownCardEl = document.getElementById('dropDownCard')

setState(assignmentsBtnEl, 'data-btnState', 'true')
assignmentsBtnEl.addEventListener('click', (event) => {
    event.preventDefault()
    
    if (getState(assignmentsBtnEl, 'data-btnState') === 'true') {
        setState(assignmentsBtnEl, 'data-btnState', 'false')
        dropDownCardEl.style.height = 'fit-content'
    } else {
        setState(assignmentsBtnEl, 'data-btnState', 'true')
        dropDownCardEl.style.height = '0px'
    }
})


// || Detail Page 
const cardsEl = document.querySelectorAll('.card')
for (let i=0; i<cardsEl.length; i++) {
    cardsEl[i].addEventListener('click', (event) => {
        event.preventDefault()
        let id = getState(cardsEl[i], 'id')
        rootEl.innerHTML = ""
        let data = AssignmentsData[id]

        rootEl.insertAdjacentHTML('beforebegin', (
            `
            <div class="back--btn">
                <div>
                    <a href="" id="backarrow">
                        <img src="./media/angle-left.svg" alt="">
                    </a>
                </div>
            </div>
            `
        ))

        for (let i=data?.questions.length; i>0; i-- ) {
            RenderToHtml(rootEl, DetailPage(data?.questions[i-1], i))
        }

    })
}
