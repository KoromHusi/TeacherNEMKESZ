const TeacherRoutes = new TeacherRoutes()

const log = logger('admin:router')

const TeacherRoutes = express.Router()

TeacherRoutes.use('/user', TeacherUserRouter)
TeacherRoutes.use('/access', TeacherAccessRouter)
TeacherRoutes.use('/subject', TeacherSubjectRouter)
TeacherRoutes.use('/topic', TeacherTopicRouter)

TeacherRoutes.use('/user', adminUserRouter)
TeacherRoutes.use('/access', adminAccessRouter)
TeacherRoutes.use('/subject', adminSubjectRouter)
TeacherRoutes.use('/topic', adminTopicRouter)


export default TeacherRoutes