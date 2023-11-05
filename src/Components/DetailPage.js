export default function DetailPage(data, id) {
    let El = id > 9? id: `0${id}`
    return (
        `
        <div class="questions">
            <p>${El}:</p>
            <p>${data}</p>
        </div>
        `
    )
}