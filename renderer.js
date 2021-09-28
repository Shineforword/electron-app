const NOTIFICATION_TITLE = '重要通知'
const NOTIFICATION_BODY = '重要通知从 Renderer process 发出. 点击打印此事件log!'
const CLICK_MESSAGE = '通知已被点击'

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => console.log(CLICK_MESSAGE)
