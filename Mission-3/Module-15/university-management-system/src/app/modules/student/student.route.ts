import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { StudentControllers } from "./student.controller";
import { StudentValidations } from "./student.validation";
const router = express.Router();

router.get("/", StudentControllers.getAllStudents);
router.get("/:id", StudentControllers.getSingleStudent);
router.patch(
  "/:id",
  validateRequest(StudentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudent
);
router.delete("/:id", StudentControllers.deleteSingleStudent);

export const StudentRoutes = router;
