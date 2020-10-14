import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanage from './../models/Orphanage'
import orphanageView from './../views/Orphanages_views'

// padrão index, show, create, update, delete
export default {
  async index(req: Request, res: Response) {
    const orphanageRespository = getRepository(Orphanage)
    const orphanages = await orphanageRespository.find({
      relations: ['images']
    })

    return res.json(orphanageView.renderMany(orphanages))
  },

  async show(req: Request, res:Response) {
    const { id } = req.params
    const orphanageRespository = getRepository(Orphanage)
    const orphanage = await orphanageRespository.findOneOrFail(id, {
      relations: ['images']
    })
    return res.json(orphanageView.render(orphanage))
  },

  async create(req: Request, res: Response) {
      const {
        nme,
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
        nme,
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
        message: 'Novo Orphanato criado com sucesso',
        orphanage
      })
    }
  }