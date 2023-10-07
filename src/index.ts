import makeWASocket from './Socket'
import { makeInMemoryStore } from './Store'

export * from '../WAProto'
export * from './Utils'
export * from './Types'
export * from './Store'
export * from './Defaults'
export * from './WABinary'
export type WASocket = ReturnType<typeof makeWASocket>
export type WAMemoryStore = ReturnType<typeof makeInMemoryStore>

export default makeWASocket
