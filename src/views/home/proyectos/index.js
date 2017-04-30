'use strict'
import yo from 'yo-yo'
import Proyecto from './proyecto'
import Etapa1 from './etapa1'
import Etapa2 from './etapa2'

const Proyectos = yo`
<div>
  ${Proyecto}
  ${Etapa1}
  ${Etapa2}
</div>
`
module.exports = Proyectos
