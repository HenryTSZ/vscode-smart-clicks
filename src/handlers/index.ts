import type { Handler, HandlerContext } from '../types'
import { bracketsPairHandler } from './brackets-pair'
import { dashHandler } from './dash'
import { htmlElementPairHandler } from './html-element-pair'
import { jsAssginHandler } from './js-assign'
import { jsBlocksHandler } from './js-blocks'

export const handlers: Handler[] = [
  // html
  htmlElementPairHandler,

  // js
  jsBlocksHandler,
  jsAssginHandler,

  // general
  dashHandler,
  bracketsPairHandler,
]

export function applyHandlers(context: HandlerContext) {
  for (const handler of handlers) {
    const selection = handler.handle(context)
    if (selection)
      return selection
  }
}
