import { Request, Response } from 'express'
import { Category } from '../models'

export const categoriesController = {
    index: async (req: Request, res: Response) => {
		const { page, perPage } = req.query

    const limit = typeof perPage === 'string' && parseInt(perPage, 10) > 0
      ? parseInt(perPage, 10)
      : 10

    const pageNumber = typeof page === 'string' && parseInt(page, 10) > 0
      ? parseInt(page, 10)
      : 1

		const offset = (pageNumber - 1) * limit

        try {
            const { count, rows } = await Category.findAndCountAll({
                attributes: ['id', 'name', 'position'],
                order: [['position', 'ASC']],
                offset
              })
      
            return res.json({
              categories: rows,
              page: pageNumber,
              perPage: limit,
              total: count
            })
          } catch (err) {
          if (err instanceof Error) {
            return res.status(400).json({ message: err.message })
          }
        }
      }
    
}