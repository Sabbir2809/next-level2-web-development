import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicDepartmentControllers } from "./academicDepartment.controller";
import { AcademicDepartmentValidations } from "./academicDepartment.validation";
const router = express.Router();

router.post(
  "/create-academic-department",
  auth("admin"),
  validateRequest(AcademicDepartmentValidations.createAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.createAcademicDepartment
);
router.get("/", AcademicDepartmentControllers.getAllAcademicDepartments);
router.get("/:departmentId", AcademicDepartmentControllers.getSingleAcademicDepartment);
router.patch(
  "/:departmentId",
  validateRequest(AcademicDepartmentValidations.updateAcademicDepartmentValidationSchema),
  AcademicDepartmentControllers.updateAcademicDepartment
);

export const AcademicDepartmentRoutes = router;
