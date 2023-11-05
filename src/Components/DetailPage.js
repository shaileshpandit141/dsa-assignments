export default function DetailPage(data, id) {
    return (
        `
        <div class="questions">
            <p>${id}:</p>
            <p>${data}</p>
        </div>
        `
    )
}