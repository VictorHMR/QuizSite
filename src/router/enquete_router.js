import express from "express";
import controller from "../controller/enquete.js"

const router = express.Router()

router.get('/', controller.list_all)
router.get('/cadastrar', (req, res)=>{
    res.render('cadastro')
})
router.get('/edit/:id', controller.EnqueteSelect)
router.get('/:id', controller.EnqueteSelect)


router.post('/cadastrar', controller.createEnquete)

// router.post('/edit', controller.updateEnquete)
router.post('/edit/:id', (req, res)=>{
    res.send(req.params.id)
})



router.delete('/deleteE', controller.deleteEnquete)

router.put('/updateE', controller.updateEnquete)
export default {router}