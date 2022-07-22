
import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../models";
import { categoryResourceOptions } from "./resources/category";
import { courseResourceOptions } from "./resources/course";

export const adminJsResources: ResourceWithOptions[] = [
  {
    resource: Course,
    options: courseResourceOptions
  },
  {
    resource: Category,
    options: categoryResourceOptions
  },
]