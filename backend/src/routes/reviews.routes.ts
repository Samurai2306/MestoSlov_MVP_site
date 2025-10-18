import { Router } from 'express'

const router = Router()

/**
 * @route   GET /api/reviews/tour/:tourId
 * @desc    Get reviews for a tour
 * @access  Public
 */
router.get('/tour/:tourId', (req, res) => {
  const { tourId } = req.params
  res.json({ tourId, reviews: [] })
})

/**
 * @route   POST /api/reviews
 * @desc    Create a review
 * @access  Private
 */
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Review created successfully' })
})

/**
 * @route   PUT /api/reviews/:id
 * @desc    Update a review
 * @access  Private
 */
router.put('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: 'Review updated successfully', reviewId: id })
})

/**
 * @route   DELETE /api/reviews/:id
 * @desc    Delete a review
 * @access  Private
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({ message: 'Review deleted successfully', reviewId: id })
})

export default router

