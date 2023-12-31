import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AcademicFacultyControllers } from "./academicFaculty.controller";
import { AcademicFacultyValidations } from "./academicFaculty.validation";
const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(AcademicFacultyValidations.createAcademicFacultyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty
);
router.get("/", auth(), AcademicFacultyControllers.getAllAcademicFaculties);
router.get("/:facultyId", AcademicFacultyControllers.getSingleAcademicFaculty);
router.patch(
  "/:facultyId",
  validateRequest(AcademicFacultyValidations.updateAcademicFacultyValidationSchema),
  AcademicFacultyControllers.updateAcademicFaculty
);

export const AcademicFacultyRoutes = router;
