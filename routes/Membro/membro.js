const express = require('express');
const router = express.Router();
const membroController = require('../../controllers/Membro/membro');


router.get('/', membroController.getAllMembro);
router.get('/:id', membroController.getMembroById);
router.post('/', membroController.createMembro);
router.put('/:id', membroController.updateMembro);
router.delete('/:id', membroController.deleteMembro);

module.exports = router;