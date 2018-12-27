// explicitely import each icon used in the projet to reduce the size of the bundle

import {library} from '@fortawesome/fontawesome-svg-core'

import {
  faBitcoin,
  faBtc
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBitcoin,
  faBtc
)
