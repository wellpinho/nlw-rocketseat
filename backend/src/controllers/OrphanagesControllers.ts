import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from './../models/Orphanage'

// padrão index, show, create, update, delete
export default {
  async index(req: Request, res: Response) {
    const orphanageRespository = getRepository(Orphanage)
    const orphanages = await orphanageRespository.find()

    return res.json(orphanages)
  },

  async show(req: Request, res:Response) {
    const { id } = req.params
    const orphanageRespository = getRepository(Orphanage)
    await orphanageRespository.findOneOrFail(id)
      .then(list => {
        return res.json(list)
      })
      .catch(err => {
        return res.status(400).json({
          message: 'Nunhum orfanato encontrado',
          error: err
        })
      })
  },

  async create(req: Request, res: Response) {
      const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
      } = req.body
    
      const orphanageRespository = getRepository(Orphanage)

      // hackizinho pra upload de arquivos
      const requestImages = req.files as Express.Multer.File[]

      const images = requestImages.map(image => {
        return { path: image.filename }
      })
    
      const orphanage = orphanageRespository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images
      })
    
      await orphanageRespository.save(orphanage)
    
      return res.status(201).json({
        message: 'Novo Orphanato criado com sucesso'
      })
    }
  }