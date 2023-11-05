export default function DropdoenEl(data) {
    let El = data.id > 9? `${data.id}`: `0${data.id}`
    return (
        `
        <div class="link--cont">
            <a href="">Assignment: ${El}</a>
        </div>
        `
    )
}