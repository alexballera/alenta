'use strict'
import yo from 'yo-yo'
import Proyecto from './proyecto'
import Etapa1 from './etapa1'

const Proyectos = yo`
<div>
  ${Proyecto}
  ${Etapa1}
</div>
`
module.exports = Proyectos
