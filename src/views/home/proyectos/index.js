'use strict'
import yo from 'yo-yo'
import Proyecto from './proyecto'
import Etapa1 from './etapa1'
import Etapa2 from './etapa2'
import Etapa3 from './etapa3'
import Contactenos from './contactenos'

const Proyectos = yo`
<div>
  ${Proyecto}
  ${Etapa1}
  ${Etapa2}
  ${Etapa3}
  ${Contactenos}
</div>
`
module.exports = Proyectos
