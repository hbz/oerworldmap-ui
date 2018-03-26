import i18n from '../../src/i18n'

export default {
  i18n: i18n(['en'], {}),
  emitter: {
    on: (event, handler) => console.log("Registered", event, handler),
    off: (event, handler) => console.log("Unregistered", event, handler),
    emit: (event, payload) => console.log("Triggered", event, payload)
  },
  schema: {}
}
