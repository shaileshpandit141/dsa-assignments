export default function RenderToHtml(positionElId, RenderEl) {
   positionElId.insertAdjacentHTML('afterbegin', RenderEl)
}