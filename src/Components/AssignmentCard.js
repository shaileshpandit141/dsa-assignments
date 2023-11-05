export default function AssignmentCard(data) {

    let num1 = data.id > 9? `${data.id}`: `0${data.id}`
    let num2 = data?.questions.length > 9? `${data?.questions.length}`: `0${data?.questions.length}`

    return (
        `
        <div class="card card--cont" id="${data.id-1}">
            <h3 class="assign--no">Assignment ${num1}</h3>
            <a href="">
                <h3>${data.title}</h3>
                <p>Questions: ${num2}</p>
                <p class="view--link">
                    <span>View it</span>
                    <span class="arrow">&#10140;</span>
                </p>
            </a>
        </div>
        `
    )
}
