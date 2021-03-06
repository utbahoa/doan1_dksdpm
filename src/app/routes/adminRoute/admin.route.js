const express = require('express');
const router = express.Router();
const adminController = require('../../controllers/adminController/AdminController.js')

router.use('/:id/updateOneTeacher',adminController.updateOneTeacher)
router.get('/student/:id/delete',adminController.deleteStudent)
router.post('/student/filterClass',adminController.filterClass)
router.post('/statisticsFilter',adminController.statisticsFilter)
router.post('/statisticsFilterMonth',adminController.statisticsFilterMonth)
router.post('/statisticsFilterMonthWeek',adminController.statisticsFilterMonthWeek)
router.post('/statisticsFilterFromTo',adminController.statisticsFilterFromTo)
router.post('/teacher/filterClass',adminController.filterClass2)
router.get('/teacher/:id/delete',adminController.deleteTeacher)
router.use('/:id/updateOneStudent',adminController.updateOneStudent)
router.use('/confirmTeacher',adminController.confirmTeacher)
router.use('/reportStudentManager/:id',adminController.reportDetailStudent)
router.use('/reportTeacherManager/:id',adminController.reportDetailTeacher)
router.use('/reportStudentManager',adminController.reportStudentManager)
router.use('/reportTeacherManager',adminController.reportTeacherManager)
router.use('/statistics',adminController.statistics)
router.use('/confirmTeacher',adminController.confirmTeacher)
router.use('/confirmStudent/:id/seenReport',adminController.seenReport)
router.use('/confirmStudent',adminController.confirmStudent)
router.use('/',adminController.index)
module.exports =router