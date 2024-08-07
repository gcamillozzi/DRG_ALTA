import { FastifyInstance } from 'fastify'
import knex from '../../config/database'

export async function healthCheck(app: FastifyInstance) {
  app.get('/', async (): Promise<void> => {
    const dataMedicoFromDatabase = await knex
      .select(
        'NM_MEDICO',
        'DDD_MEDICO',
        'EMAIL_MEDICO',
        'EMAIL_MEDICO',
        'UF_MEDICO',
        'CRM_MEDICO',
        'ESPECIALIDADE_MEDICO',
        'MEDICO_RESPONSAVEL',
        'TP_ATUACAO_MEDICO',
      )
      .from('INOVEMED.TBL_INM_MEDICO')

    console.log(dataMedicoFromDatabase)
  })
}
