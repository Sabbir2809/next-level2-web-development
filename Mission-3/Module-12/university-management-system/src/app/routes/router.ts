import { Router } from "express";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";
import { StudentRoutes } from "../modules/student/student.route";
import { userRoutes } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/users",
    router: userRoutes,
  },
  {
    path: "/students",
    router: StudentRoutes,
  },
  {
    path: "/academic-semester",
    router: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
